import { Container, Image, Button, Popover, OverlayTrigger, Dropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { aamMissiles } from '@/data/AamMissiles'
import type { AamDefinition, BaseAamVehicle } from '@/types/AamMissiles'
import '@/styles/pages/Aams.scss'

export default function Aams() {
  const [activeAamId, setActiveAamId] = useState<string | null>(null);
  const [vehicle, setVehicle] = useState<BaseAamVehicle | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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

  function handleAamClick(aamId: string) {
    if (activeAamId === aamId) {
      setActiveAamId(null);
      setVehicle(null);
      return;
    }

    const aam = aamMissiles.find((aam) => aam.id === aamId);
    setVehicle(aam?.vehicles[0] ?? null);
    setActiveAamId(aamId);
  }

  const popover = (aam: AamDefinition) => (
    <Popover id="aam-popover">
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

        <span className="fs-4 fw-bold">{aam.designation}</span>
      </Popover.Header>

      <Popover.Body className="px-3 pb-2 pt-1 fs-6">
        <div>
          <span className="text-muted">AAM</span>
          <span className="text-muted"> - </span>
          <span className="text-muted">Air-to-Air Missile</span>
          {/* <span className="text-muted">{getSamMissileVariantName(sam.variant)}</span> */}
        </div>

        <Dropdown className="mb-2">
          <Dropdown.Toggle variant="transparent" className="border-0 p-0 fw-medium">
            {vehicle?.vehicleName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {aam.vehicles.map((vehicle) => (
              <Dropdown.Item disabled className="text-light" onClick={() => setVehicle(vehicle)}>{vehicle.vehicleName}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <ul className="list-unstyled aams-performance-list mb-0">
          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Projectile Mass</span>
            <span className="text-muted">{aam.projectileMassKg} kg</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Guidance</span>
            <span className="text-muted">{aam.guidance}</span>
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

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Launch Range</span>
            <span className="text-muted">{aam.launchRangeKm} km</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Maximum Speed</span>
            <span className="text-muted">{aam.maximumSpeedMach} M</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Maximum overload</span>
            <span className="text-muted">{aam.maximumOverloadG} G</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Missile Guidance Time</span>
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
            <span className="fw-bold">TNT Equivalent</span>
            <span className="text-muted">{aam.tntEquivalentKg} kg</span>
          </li>

          {/* {sam.family === "Semi-Automatic" && (
            <>
              {vehicle?.fuzeDelayM != null && (
                <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                  <span className="fw-bold">Fuze Delay</span>
                  <span className="text-muted">{vehicle.fuzeDelayM} m</span>
                </li>
              )}
              {vehicle?.fuzeSensitivityMm != null && (
                <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
                  <span className="fw-bold">Fuze Sensitivity</span>
                  <span className="text-muted">{vehicle.fuzeSensitivityMm} mm</span>
                </li>
              )}
            </>
          )} */}
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

      <h1>Air-to-Air Missiles</h1>

      <p>Air-to-Air Missiles amount: 0</p>

      <div className="d-flex flex-column row-gap-4 plane-aams-row">
        {aamMissiles.map((aam) => (
          <OverlayTrigger key={aam.id} trigger="click" placement={isMobile ? "bottom-start" : "auto"} show={activeAamId === aam.id} overlay={popover(aam)} rootClose onToggle={(nextShow) => {
            if (!nextShow && activeAamId === aam.id) {
              setActiveAamId(null);
              setVehicle(null);
            }
          }}>
            <Button
              variant="transparent"
              className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1"
              onClick={() => handleAamClick(aam.id)}
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

              <span>{aam.designation}</span>
            </Button>
          </OverlayTrigger>
        ))}
      </div>
    </Container>
  )
}
