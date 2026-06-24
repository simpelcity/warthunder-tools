import { Container, Image, Button, Popover, OverlayTrigger, Dropdown, Overlay, Tooltip } from 'react-bootstrap'
import { useState, useEffect, useRef } from 'react'
import { samMissiles } from '@/data/SamMissiles'
import type { SamDefinition, BaseSamVehicle } from '@/types/SamMissiles'
import { getSamVariantName } from '@/constants/SamMissileVariantNames'
import '@/styles/pages/Sams.scss'
import { FaArrowLeftLong, FaCircleCheck } from 'react-icons/fa6'

export default function Sams() {
  const [activeSamId, setActiveSamId] = useState<string | null>(null);
  const [vehicle, setVehicle] = useState<BaseSamVehicle | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);

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

  function handleSamClick(samId: string) {
    if (activeSamId === samId) {
      setActiveSamId(null);
      setVehicle(null);
      return;
    }

    const sam = samMissiles.find((sam) => sam.id === samId);
    setVehicle(sam?.vehicles[0] ?? null);
    setActiveSamId(samId);
  }

  const popover = (sam: SamDefinition) => (
    <Popover id="sam-popover">
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

        <span className="fs-4 fw-bold">{sam.designation}</span>
      </Popover.Header>

      <Popover.Body className="px-3 pb-2 pt-1 fs-6">
        <div>
          <span className="text-muted">SAM</span>
          <span className="text-muted"> - </span>
          <span className="text-muted">Surface-to-Air Missile</span>
          {/* <span className="text-muted">{getSamMissileVariantName(sam.variant)}</span> */}
        </div>

        <Dropdown className="mb-2">
          <Dropdown.Toggle variant="transparent" className="border-0 p-0 fw-medium">
            {vehicle?.vehicleName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {sam.vehicles.map((vehicle) => (
              <Dropdown.Item className="" onClick={() => setVehicle(vehicle)}>{vehicle.vehicleName}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

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

      <p>Surface-to-Air Missiles amount: {samMissiles.length}</p>

      <div className="d-flex flex-column row-gap-4 spaa-sams-row">
        {samMissiles.map((sam) => (
          <OverlayTrigger key={sam.id} trigger="click" placement={isMobile ? 'bottom-start' : 'auto'} show={activeSamId === sam.id} overlay={popover(sam)} rootClose onToggle={(nextShow) => {
            if (!nextShow && activeSamId === sam.id) {
              setActiveSamId(null);
              setVehicle(null);
            }
          }}>
            <Button
              variant="transparent"
              className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1"
              onClick={() => handleSamClick(sam.id)}
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
