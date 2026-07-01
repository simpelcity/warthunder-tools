import { Container, Image, Button, Popover, OverlayTrigger, Dropdown, Overlay, Tooltip } from 'react-bootstrap'
import { useState, useEffect, useRef } from 'react'
import { FaArrowLeftLong, FaAngleDown } from 'react-icons/fa6'
import { aamMissiles } from '@/data/AamMissiles'
import type { AamDefinition, BaseAamVehicle } from '@/types/AamMissiles'
import '@/styles/pages/Aams.scss'
import { getAamIconPath } from '@/constants/AamMissileIcons'
import { getAamVariantName } from '@/constants/AamMissileVariantNames'
import { getCountryIcons } from '@/constants/CountryIcons'

const MOBILE_POPOVER_HEIGHT_ESTIMATE = 320;

export default function Aams() {
  const [activeAamId, setActiveAamId] = useState<string | null>(null);
  const [activeAamPlacement, setActiveAamPlacement] = useState<'top-start' | 'bottom-start' | 'auto'>('auto');
  const [vehicle, setVehicle] = useState<BaseAamVehicle | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVehicleDropdownOpen, setIsVehicleDropdownOpen] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [showBrs, setShowBrs] = useState(false);
  const targetBrs = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 576px)');
    const handleViewportChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleViewportChange);

    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange);
    };
  }, []);

  function handleAamClick(aamId: string, targetElement: HTMLButtonElement) {
    if (isMobile) {
      const targetRect = targetElement.getBoundingClientRect();
      const spaceBelow = window.innerHeight - targetRect.bottom;
      const openUpwards = spaceBelow < MOBILE_POPOVER_HEIGHT_ESTIMATE;

      setActiveAamPlacement(openUpwards ? "top-start" : "bottom-start");
    } else {
      setActiveAamPlacement("auto");
    }

    if (activeAamId === aamId) {
      setActiveAamId(null);
      setVehicle(null);
      return;
    }

    const aam = aamMissiles.find((aam) => aam.id === aamId);
    setVehicle(aam?.vehicles[0] ?? null);
    setActiveAamId(aamId);
    setShow(false);
    setShowBrs(false);
  }

  const popover = (aam: AamDefinition) => (
    <Popover id="aam-popover">
      <Popover.Header className="d-inline-flex w-100 align-items-center border-0 px-3 pb-0 column-gap-2">
        <div className="shell-icon position-relative overflow-hidden">
          <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
            <Image src={getAamIconPath(aam)} alt="Air-to-Air Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
          </div>
        </div>

        <span className="fs-5 fw-bold">{aam.designation} air-to-air missiles</span>
      </Popover.Header>

      <Popover.Body className="px-3 pb-2 pt-1 fs-6">
        <div className="d-flex flex-wrap justify-content-between mb-2 column-gap-3">
          <Dropdown className="vehicle-dropdown" onToggle={(nextShow) => setIsVehicleDropdownOpen(nextShow)}>
            <Dropdown.Toggle variant="transparent" className="border-0 p-0 d-flex align-items-center">
              {vehicle?.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: vehicle.vehicleTechTree, vehicleCountry: vehicle.vehicleCountry })} height={24} className="me-1" />}
              <span>{vehicle?.vehicleName}</span>
              <span className={`ms-1 chevron-rotate-180 ${isVehicleDropdownOpen ? "is-open" : ""}`}>
                <FaAngleDown />
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {aam.vehicles.map((vehicle) => (
                <Dropdown.Item className="d-flex align-items-center" onClick={() => setVehicle(vehicle)}>
                  {vehicle?.vehicleTechTree && <Image src={getCountryIcons({ vehicleTechTree: vehicle.vehicleTechTree, vehicleCountry: vehicle.vehicleCountry })} width={24} className="me-1" />}
                  <span>{vehicle.vehicleName}</span>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <div className="d-flex column-gap-2 align-items-center">
            <div>
              <span>Rank</span>{" "}
              <span className="font-sans fw-normal">{vehicle?.vehicleRank}</span>
            </div>

            <span className="text-muted">•</span>

            {isMobile ? (
              <>
                <div ref={targetBrs} onClick={() => setShowBrs(!showBrs)}>
                  <span>BR</span>{" "}
                  <span>{vehicle?.vehicleBr}</span>
                </div>
                <Overlay target={targetBrs} show={showBrs} placement="top">
                  <Tooltip id="overlay-br">
                    <div className="d-flex flex-column">
                      <div className="d-flex column-gap-2">
                        <div className="d-flex flex-column">
                          <span className="text-muted small">AB</span>
                          <span className="fw-bold fs-6">{vehicle?.vehicleBrAB ? vehicle.vehicleBrAB : vehicle?.vehicleBr}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">RB</span>
                          <span className="fw-bold fs-6">{vehicle?.vehicleBr}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-muted small">SB</span>
                          <span className="fw-bold fs-6">{vehicle?.vehicleBrSB ? vehicle.vehicleBrSB : vehicle?.vehicleBr}</span>
                        </div>
                      </div>
                      <span className="text-muted text-start">Battle rating</span>
                    </div>
                  </Tooltip>
                </Overlay>
              </>
            ) : (
              <>
                <OverlayTrigger overlay={<Tooltip id="overlay-br">
                  <div className="d-flex flex-column">
                    <div className="d-flex column-gap-2">
                      <div className="d-flex flex-column">
                        <span className="text-muted small">AB</span>
                        <span className="fw-bold fs-6">{vehicle?.vehicleBrAB ? vehicle.vehicleBrAB : vehicle?.vehicleBr}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-muted small">RB</span>
                        <span className="fw-bold fs-6">{vehicle?.vehicleBr}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="text-muted small">SB</span>
                        <span className="fw-bold fs-6">{vehicle?.vehicleBrSB ? vehicle.vehicleBrSB : vehicle?.vehicleBr}</span>
                      </div>
                    </div>
                    <span className="text-muted text-start">Battle rating</span>
                  </div>
                </Tooltip>}>
                  <div>
                    <span>BR</span>{" "}
                    <span>{vehicle?.vehicleBr}</span>
                  </div>
                </OverlayTrigger>
              </>
            )}
          </div>
        </div>

        <ul className="list-unstyled aams-performance-list mb-0">
          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Projectile Mass</span>
            <span className="text-muted">{aam.projectileMassKg} kg</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Guidance</span>
            {isMobile ? (
              <>
                <span className="text-muted" ref={target} onClick={() => setShow(!show)}>{aam.guidance}</span>
                <Overlay target={target} show={show} placement="top">
                  <Tooltip id="overlay-name">{getAamVariantName(aam.variant).split(/([-\s]+)/).map((part, index) =>
                    /[-+\s]+/.test(part) ? (
                      <>
                        <span key={index} className="fw-normal text-muted">{part}</span>
                      </>
                    ) : (
                      <span key={index} className="fw-bold">{part}</span>
                    )
                  )}</Tooltip>
                </Overlay>
              </>
            ) : (
              <>
                <OverlayTrigger overlay={<Tooltip id={aam.id}>{getAamVariantName(aam.variant).split(/([-\s]+)/).map((part, index) =>
                    /[-+\s]+/.test(part) ? (
                      <>
                        <span key={index} className="fw-normal text-muted">{part}</span>
                      </>
                    ) : (
                      <span key={index} className="fw-bold">{part}</span>
                    )
                  )}</Tooltip>}>
                  <span className="text-muted">{aam.guidance}</span>
                </OverlayTrigger>
              </>
            )}
          </li>

          {aam.category === "Radar" && (
            <>
              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Band</span>
                <span className="text-muted">{aam.band}</span>
              </li>

              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Shoot down</span>
                <span className="text-muted">{aam.shootDown}</span>
              </li>

              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Lock range</span>
                <span className="text-muted">{aam.lockRangeKm} km</span>
              </li>
            </>
          )}

          {aam.category === "IR" && (
            <>
              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Aspect</span>
                <span className="text-muted">{aam.aspect}</span>
              </li>

              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Lock range in rear-aspect</span>
                <span className="text-muted">{aam.lockRangeRearAspectKm} km</span>
              </li>

              {aam.aspect === "All-aspects" && (
                <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                  <span className="fw-bold">Lock range in all-aspect</span>
                  <span className="text-muted">{aam.lockRangeAllAspectsKm} km</span>
                </li>
              )}
            </>
          )}

          {aam.family !== "Command-Guided (MCLOS)" && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Launch range</span>
              <span className="text-muted">{aam.launchRangeKm} km</span>
            </li>
          )}

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Maximum speed</span>
            <span className="text-muted">{aam.maximumSpeedMach} M</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Maximum overload</span>
            <span className="text-muted">{aam.maximumOverloadG} G</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Missile guidance time</span>
            <span className="text-muted">{aam.missileGuidanceTimeS} s</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Explosive Type</span>
            <span className="text-muted">{aam.explosiveType}</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Explosive Mass</span>
            <span className="text-muted">{aam.explosiveMassKg} kg</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">TNT equivalent</span>
            <span className="text-muted">{aam.tntEquivalentKg} kg</span>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  return (
    <Container className="p-4">
      <Button variant="primary" className="border-0 rounded-1 px-3 fs-5 d-inline-flex column-gap-1 mb-4 fw-semibold" href="/">
        <span className="d-flex align-items-center"><FaArrowLeftLong className="fs-5" /></span>
        <p className="my-auto">Back to Home</p>
      </Button>

      <h1>Air-to-Air Missiles</h1>

      <p>Amount of Air-to-Air Missiles: {aamMissiles.length}</p>

      <div className="d-flex flex-column row-gap-4 plane-aams-row">
        {aamMissiles.map((aam) => (
          <OverlayTrigger key={aam.id} trigger="click" placement={activeAamPlacement} show={activeAamId === aam.id} overlay={popover(aam)} rootClose onToggle={(nextShow) => {
            if (!nextShow && activeAamId === aam.id) {
              setActiveAamId(null);
              setVehicle(null);
              setShow(false);
            }
          }}>
            <Button
              variant="transparent"
              className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1"
              onClick={(event) => handleAamClick(aam.id, event.currentTarget)}
            >
              <div className="shell-icon position-relative overflow-hidden">
                <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                  <Image src={getAamIconPath(aam)} alt="Air-to-Air Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
                </div>
              </div>

              <span>{aam.designation}</span>
            </Button>
          </OverlayTrigger>
        ))}
      </div>
    </Container>
  )
}
