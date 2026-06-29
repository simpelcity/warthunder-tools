import { tankShells } from "@/data/TankShells"
import { getTankShellVariantName } from "@/constants/TankShellVariantNames"
import { getTankShellIconPath, getTankShellDecorIcons } from "@/constants/TankShellIcons"
import type { TankShellDefinition, TankShellPerformance } from '@/types/TankShells'
import '@/styles/pages/Shells.scss'
import { Container, Image, Button, Popover, OverlayTrigger, Dropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { FaArrowLeftLong, FaAngleDown } from 'react-icons/fa6'
import { getTechTreeIcons } from '@/constants/TechTreeIcons'

const MOBILE_POPOVER_HEIGHT_ESTIMATE = 320;

export default function Shells() {
  const [activeShellId, setActiveShellId] = useState<string | null>(null);
  const [activeShellPlacement, setActiveShellPlacement] = useState<'top-start' | 'bottom-start' | 'auto'>('auto');
  const [vehicle, setVehicle] = useState<TankShellPerformance | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVehicleDropdownOpen, setIsVehicleDropdownOpen] = useState(false);

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

  function handleShellClick(shellId: string, targetElement: HTMLButtonElement) {
    if (isMobile) {
      const targetRect = targetElement.getBoundingClientRect();
      const spaceBelow = window.innerHeight - targetRect.bottom;
      const openUpwards = spaceBelow < MOBILE_POPOVER_HEIGHT_ESTIMATE;

      setActiveShellPlacement(openUpwards ? 'top-start' : 'bottom-start');
    } else {
      setActiveShellPlacement('auto');
    }

    if (activeShellId === shellId) {
      setActiveShellId(null);
      setVehicle(null);
      return;
    }

    const shell = tankShells.find((shell) => shell.id === shellId);
    setVehicle(shell?.performances[0] ?? null);
    setActiveShellId(shellId);
  }

  const popover = (shell: TankShellDefinition) => (
    <Popover id="shell-popover">
      <Popover.Header className="d-inline-flex w-100 align-items-center border-0 px-3 pb-0 column-gap-2">
        <div className="shell-icon position-relative overflow-hidden">
          {shell.armor && shell.damage && (
            <div className="shell-icon_decor position-absolute w-100 h-100 start-0 top-0">
              <Image src={getTankShellDecorIcons(shell).damage} alt="Damage" className="position-absolute w-100 start-0 top-0" />

              <Image src={getTankShellDecorIcons(shell).armor} alt="Armor" className="position-absolute w-100 start-0 top-0" />
            </div>
          )}

          <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
            <Image src={getTankShellIconPath(shell)} alt={`${shell.variant} shell icon`} className="h-100 flex-grow-0 flex-shrink-1" />
          </div>
        </div>

        <span className="fs-4 fw-bold">{shell.designation}</span>
      </Popover.Header>

      <Popover.Body className="px-3 pb-2 pt-1 fs-6">
        <div>
          <span className="text-muted">{shell.variant}</span>
          <span className="text-muted"> - </span>
          <span className="text-muted">{getTankShellVariantName(shell.variant)}</span>
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

            <Dropdown.Menu className="">
              {shell.performances.map((vehicle) => (
                <Dropdown.Item className="" onClick={() => setVehicle(vehicle)}>
                  {vehicle?.vehicleTechTree && <Image src={getTechTreeIcons({ vehicleTechTree: vehicle.vehicleTechTree })} width={24} className="me-1" />}
                  <span>{vehicle.vehicleName}</span>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <div className="d-flex column-gap-1 align-items-center">
            <div>
              <span>Rank</span>{" "}
              <span className="font-serif">{vehicle?.vehicleRank}</span>
            </div>

            <span className="text-muted">•</span>

            <div>
              <span>BR</span>{" "}
              <span>{vehicle?.vehicleBR}</span>
            </div>
          </div>
        </div>
        
        
        <ul className="list-unstyled shells-performance-list mb-0">
          <li className="d-flex flex-column pb-1 mb-1 border-bottom column-gap-2">
            <span className="text-muted">Armor penetration (max.)</span>
            <span className="fw-bold">{vehicle?.penetrationMm} mm</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Caliber</span>
            <span className="text-muted">{vehicle?.caliberMm} mm</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Projectile Mass</span>
            <span className="text-muted">{vehicle?.projectileMassKg ? (vehicle?.projectileMassKg * 1000) >= 1000 ? (
              <>
                {vehicle?.projectileMassKg} kg
              </>
            ) : (
              <>
                {vehicle?.projectileMassKg * 1000} g
              </>
            ) : undefined}</span>
          </li>

          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
            <span className="fw-bold">Muzzle Velocity</span>
            <span className="text-muted">{vehicle?.muzzleVelocityMs} m/s</span>
          </li>

          {vehicle?.fuzeDelayM && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Fuze Delay</span>
              <span className="text-muted">{vehicle.fuzeDelayM} m</span>
            </li>
          )}

          {vehicle?.fuzeSensitivityMm && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Fuze Sensitivity</span>
              <span className="text-muted">{vehicle.fuzeSensitivityMm} mm</span>
            </li>
          )}

          {vehicle?.explosiveType && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Explosive Type</span>
              <span className="text-muted">{vehicle.explosiveType}</span>
            </li>
          )}

          {vehicle?.explosiveMassKg && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">Explosive Mass</span>
              <span className="text-muted">{(vehicle.explosiveMassKg * 1000) >= 1000 ? (
                <>
                  {vehicle.explosiveMassKg} kg
                </>
              ) : (
                <>
                  {vehicle.explosiveMassKg * 1000} g
                </>
              )}</span>
            </li>
          )}

          {vehicle?.tntEquivalentKg && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 border-bottom column-gap-2">
              <span className="fw-bold">TNT equivalent</span>
              <span className="text-muted">{(vehicle.tntEquivalentKg * 1000) >= 1000 ? (
                <>
                  {vehicle.tntEquivalentKg} kg
                </>
              ) : (
                <>
                  {vehicle.tntEquivalentKg * 1000} g
                </>
              )}</span>
            </li>
          )}
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

      <h1>Shells</h1>

      <p>Shells amount: {tankShells.length}</p>

      <div className="d-flex flex-column row-gap-4 tank-shells-row">
        {tankShells.map((shell) => (
          <OverlayTrigger key={shell.id} trigger="click" placement={activeShellPlacement} show={activeShellId === shell.id} overlay={popover(shell)} rootClose onToggle={(nextShow) => {
            if (!nextShow && activeShellId === shell.id) {
              setActiveShellId(null)
              setVehicle(null)
            }
          }}>
            <Button
              variant="transparent"
              className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1"
              onClick={(event) => handleShellClick(shell.id, event.currentTarget)}
            >
              <div className="shell-icon position-relative overflow-hidden">
                {shell.armor && shell.damage && (
                  <div className="shell-icon_decor position-absolute w-100 h-100 start-0 top-0">
                    <Image src={getTankShellDecorIcons(shell).damage} alt="Damage" className="position-absolute w-100 start-0 top-0" />

                    <Image src={getTankShellDecorIcons(shell).armor} alt="Armor" className="position-absolute w-100 start-0 top-0" />
                  </div>
                )}

                <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                  <Image src={getTankShellIconPath(shell)} alt={`${shell.variant} shell icon`} className="h-100 flex-grow-0 flex-shrink-1" />
                </div>
              </div>

              <span>{shell.designation}</span>
            </Button>
          </OverlayTrigger>
        ))}
      </div>
    </Container>
  )
}
