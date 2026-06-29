import { Container, Image, Button, Popover, OverlayTrigger, Dropdown, Overlay, Tooltip } from 'react-bootstrap'
import { useState, useEffect, useRef } from 'react'
import { samMissiles } from '@/data/SamMissiles'
import type { SamDefinition, BaseSamVehicle } from '@/types/SamMissiles'
import { getSamVariantName } from '@/constants/SamMissileVariantNames'
import '@/styles/pages/Sams.scss'
import { FaArrowLeftLong, FaCircleCheck, FaAngleDown } from 'react-icons/fa6'
import { getTechTreeIcons } from '@/constants/TechTreeIcons'

const MOBILE_POPOVER_HEIGHT_ESTIMATE = 320;

export default function Sams() {
  const [activeSamId, setActiveSamId] = useState<string | null>(null);
  const [activeSamPlacement, setActiveSamPlacement] = useState<'top-start' | 'bottom-start' | 'auto'>('auto');
  const [vehicle, setVehicle] = useState<BaseSamVehicle | null>(null);
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

  function handleSamClick(samId: string, targetElement: HTMLButtonElement) {
    if (isMobile) {
      const targetRect = targetElement.getBoundingClientRect();
      const spaceBelow = window.innerHeight - targetRect.bottom;
      const openUpwards = spaceBelow < MOBILE_POPOVER_HEIGHT_ESTIMATE;

      setActiveSamPlacement(openUpwards ? "top-start" : "bottom-start");
    } else {
      setActiveSamPlacement("auto");
    }

    if (activeSamId === samId) {
      setActiveSamId(null);
      setVehicle(null);
      return;
    }

    const sam = samMissiles.find((sam) => sam.id === samId);
    setVehicle(sam?.vehicles[0] ?? null);
    setActiveSamId(samId);
    setShow(false);
    setShowBrs(false);
  }

  const popover = (sam: SamDefinition) => (
    <Popover id="sam-popover" className="mb-5">
      <Popover.Header className="d-inline-flex w-100 align-items-center border-0 px-3 pb-0 column-gap-2">
        <div className="shell-icon position-relative overflow-hidden">
          <div className="shell-icon_decor position-absolute w-100 h-100 start-0 top-0">
            <Image src="https://static.encyclopedia.warthunder.com/gui_skin/explosion_big.png" alt="Damage" className="position-absolute w-100 start-0 top-0" />

            <Image src="https://static.encyclopedia.warthunder.com/gui_skin/armor_vsmall.png" alt="Armor" className="position-absolute w-100 start-0 top-0" />
          </div>

          <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
            <Image src="https://static.encyclopedia.warthunder.com/gui_skin/sam.png" alt="Surface-to-Air Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
          </div>
        </div>

        <span className="fs-5 fw-bold">{sam.designation}</span>
      </Popover.Header>

      <Popover.Body className="px-3 pb-2 pt-1 fs-6">
        <div>
          <span className="text-muted">SAM</span>
          <span className="text-muted"> - </span>
          <span className="text-muted">Surface-to-Air Missile</span>
          {/* <span className="text-muted">{getSamMissileVariantName(sam.variant)}</span> */}
        </div>

        <div className="d-flex flex-wrap justify-content-between mb-2 column-gap-3">
          <Dropdown className="vehicle-dropdown" onToggle={(nextShow) => setIsVehicleDropdownOpen(nextShow)}>
            <Dropdown.Toggle variant="transparent" className="border-0 p-0 d-flex align-items-center">
              {vehicle?.vehicleTechTree && <Image src={getTechTreeIcons({ vehicleTechTree: vehicle.vehicleTechTree })} height={24} className="me-1" />}
              <span>{vehicle?.vehicleName}</span>
              <span className={`ms-1 chevron-rotate-180 ${isVehicleDropdownOpen ? "is-open" : ""}`}>
                <FaAngleDown />
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {sam.vehicles.map((vehicle) => (
                <Dropdown.Item className="d-flex align-items-center" onClick={() => setVehicle(vehicle)}>
                  {vehicle?.vehicleTechTree && <Image src={getTechTreeIcons({ vehicleTechTree: vehicle.vehicleTechTree })} width={24} className="me-1" />}
                  <span>{vehicle.vehicleName}</span>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <div className="d-flex column-gap-2 align-items-center">
            <div>
              <span>Rank</span>{" "}
              <span className="font-serif">{vehicle?.vehicleRank}</span>
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

        <ul className="list-unstyled sams-performance-list mb-0">
          {(sam.family === "Semi-Automatic" || sam.family === "Beam riding") && (
            <li className="d-flex flex-column align-items-between justify-content-center flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="text-muted">Armor penetration (max.)</span>
              <span className="fw-bold">{sam.penetrationMm} mm</span>
            </li>
          )}

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Caliber</span>
            <span className="text-muted">{sam.caliberMm} mm</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Projectile Mass</span>
            <span className="text-muted">{sam.projectileMassKg} kg</span>
          </li>

          {(sam.family === "Semi-Automatic" || sam.family === "Beam riding") && (
            <>
              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Fuze Delay</span>
                <span className="text-muted">{sam.fuzeDelayM} m</span>
              </li>

              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Fuze Sensitivity</span>
                <span className="text-muted">{sam.fuzeSensitivityMm} mm</span>
              </li>
            </>
          )}

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Guidance</span>
            {isMobile ? (
              <>
                <span className="text-muted" ref={target} onClick={() => setShow(!show)}>{sam.guidance}</span>
                <Overlay target={target} show={show} placement="top">
                  <Tooltip id="overlay-name">{getSamVariantName(sam.variant).split(/([-\s]+)/).map((part, index) =>
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
                  <OverlayTrigger overlay={<Tooltip id={sam.id}>{getSamVariantName(sam.variant).split(/([-\s]+)/).map((part, index) =>
                    /[-+\s]+/.test(part) ? (
                      <>
                        <span key={index} className="fw-normal text-muted">{part}</span>
                      </>
                    ) : (
                      <span key={index} className="fw-bold">{part}</span>
                    )
                  )}</Tooltip>}>
                  <span className="text-muted">{sam.guidance}</span>
                </OverlayTrigger>
              </>
            )}
          </li>

          {sam.family === "IR" && (
            <>
              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Aspect</span>
                <span className="text-muted">{sam.aspect}</span>
              </li>

              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Lock range in rear-aspect</span>
                <span className="text-muted">{sam.lockRangeRearAspectKm} km</span>
              </li>

              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Lock range in all-aspect</span>
                <span className="text-muted">{sam.lockRangeAllAspectKm} km</span>
              </li>

              {sam.IRCCM && (
                <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                  <span className="fw-bold">IRCCM</span>
                  <span className="text-muted"><FaCircleCheck className="text-success" /></span>
                </li>
              )}
            </>
          )}

          {sam.family === "ARH" && (
            <>
              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Band</span>
                <span className="text-muted">{sam.band}</span>
              </li>

              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Shoot down</span>
                <span className="text-muted">{sam.shootDown}</span>
              </li>

              <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                <span className="fw-bold">Lock range</span>
                <span className="text-muted">{sam.lockRangeKm} km</span>
              </li>
            </>
          )}

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Launch range</span>
            <span className="text-muted">{sam.launchRangeKm} km</span>
          </li>

          {sam.maximumSpeedMs && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Maximum speed</span>
              <span className="text-muted">{sam.maximumSpeedMs} m/s</span>
            </li>
          )}

          {sam.maximumSpeedMach && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Maximum speed</span>
              <span className="text-muted">{sam.maximumSpeedMach} M</span>
            </li>
          )}

          {(sam.family === "IR" || sam.family === "ARH") && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Maximum overload</span>
              <span className="text-muted">{sam.maximumOverloadG} G</span>
            </li>
          )}

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Missile guidance time</span>
            <span className="text-muted">{sam.missileGuidanceTimeS} s</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Explosive Type</span>
            <span className="text-muted">{sam.explosiveType}</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Explosive Mass</span>
            <span className="text-muted">{sam.explosiveMassKg} kg</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">TNT Equivalent</span>
            <span className="text-muted">{sam.tntEquivalentKg} kg</span>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  )

  return (
    <Container className="p-4">
      <Button variant="primary" className="border-0 rounded-1 px-3 fs-5 d-inline-flex column-gap-1 mb-4 fw-semibold" href="/">
        <span className="d-flex align-items-center"><FaArrowLeftLong className="fs-5" /></span>
        <p className="my-auto">Back to Home</p>
      </Button>

      <h1>Surface-to-Air Missiles</h1>

      <p>Amount of Surface-to-Air Missiles: {samMissiles.length}</p>

      <div className="d-flex flex-column row-gap-4 spaa-sams-row">
        {samMissiles.map((sam) => (
          <OverlayTrigger key={sam.id} trigger="click" placement={activeSamPlacement} show={activeSamId === sam.id} overlay={popover(sam)} rootClose onToggle={(nextShow) => {
            if (!nextShow && activeSamId === sam.id) {
              setActiveSamId(null);
              setVehicle(null);
            }
          }}>
            <Button
              variant="transparent"
              className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1"
              onClick={(event) => handleSamClick(sam.id, event.currentTarget)}
            >
              <div className="shell-icon position-relative overflow-hidden">
                <div className="shell-icon_decor position-absolute w-100 h-100 start-0 top-0">
                  <Image src="https://static.encyclopedia.warthunder.com/gui_skin/explosion_big.png" alt="Damage" className="position-absolute w-100 start-0 top-0" />

                  <Image src="https://static.encyclopedia.warthunder.com/gui_skin/armor_vsmall.png" alt="Armor" className="position-absolute w-100 start-0 top-0" />
                </div>

                <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                  <Image src="https://static.encyclopedia.warthunder.com/gui_skin/sam.png" alt="Surface-to-Air Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
                </div>
              </div>

              <span>{sam.designation}</span>
            </Button>
          </OverlayTrigger>
        ))}
      </div>
    </Container>
  )
}
