import { tankShells } from "@/data/tankShells"
import { getTankShellVariantName } from "@/constants/tankShellVariantNames"
import { getTankShellIconPath, getTankShellDecorIcons } from "@/constants/tankShellIcons"
import type { TankShellDefinition, TankShellPerformance } from '@/types/TankShells'
import '@/styles/pages/Shells.scss'
import { Container, Image, Button, Popover, OverlayTrigger, Dropdown } from 'react-bootstrap'
import { useState } from 'react'

export default function Shells() {
  const [activeShellId, setActiveShellId] = useState<string | null>(null);
  const [vehicle, setVehicle] = useState<TankShellPerformance | null>(null);

  function handleShellClick(shellId: string) {
    if (activeShellId === shellId) {
      setActiveShellId(null);
      setVehicle(null);
      return;
    }

    const shell = tankShells.find((item) => item.id === shellId);
    setVehicle(shell?.performances[0] ?? null);
    setActiveShellId(shellId);
  }

  const popover = (shell: TankShellDefinition) => (
    <Popover id="popover-basic">
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
          <span className="text-muted">{shell.variant}</span>{" - "}
          <span className="text-muted">{getTankShellVariantName(shell.variant)}</span>
        </div>
        
        <Dropdown className="mb-2">
          <Dropdown.Toggle variant="transparent" className="border-0 p-0 fw-medium">
            {vehicle?.vehicleName}
          </Dropdown.Toggle>

          <Dropdown.Menu className="">
            {shell.performances.map((vehicle) => (
              <Dropdown.Item className="" onClick={() => setVehicle(vehicle)}>{vehicle.vehicleName}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        
        <ul className="list-unstyled shells-performance-list mb-0">
          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 px-1 border-bottom">
            <span className="text-muted">Armor penetration (max.)</span>
            <span className="fw-bold">{vehicle?.penetrationMm} mm</span>
          </li>
          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 px-1 border-bottom">
            <span className="fw-bold">Caliber</span>
            <span className="text-muted">{vehicle?.caliberMm} mm</span>
          </li>
          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 px-1 border-bottom">
            <span className="fw-bold">Projectile Mass</span>
            <span className="text-muted">{vehicle ? vehicle.projectileMassKg : undefined} kg</span>
          </li>
          <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 px-1 border-bottom">
            <span className="fw-bold">Muzzle Velocity</span>
            <span className="text-muted">{vehicle?.muzzleVelocityMs} m/s</span>
          </li>
          {vehicle?.fuzeDelayM && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 px-1 border-bottom">
              <span className="fw-bold">Fuze Delay</span>
              <span className="text-muted">{vehicle.fuzeDelayM} m</span>
            </li>
          )}
          {vehicle?.fuzeSensitivityMm && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 px-1 border-bottom">
              <span className="fw-bold">Fuze Sensitivity</span>
              <span className="text-muted">{vehicle.fuzeSensitivityMm} mm</span>
            </li>
          )}
          {vehicle?.explosiveType && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 px-1 border-bottom">
              <span className="fw-bold">Explosive Type</span>
              <span className="text-muted">{vehicle.explosiveType}</span>
            </li>
          )}
          {vehicle?.explosiveMassKg && (
            <li className="d-flex align-items-center justify-content-between flex-wrap pb-1 mb-1 px-1 border-bottom">
              <span className="fw-bold">Explosive Mass</span>
              <span className="text-muted">{vehicle.explosiveMassKg * 1000} g</span>
            </li>
          )}
        </ul>
      </Popover.Body>
    </Popover>
  );

  return (
    <Container className="p-4">
      <h1>Shells</h1>

      <p>Shells amount: {tankShells.length}</p>

      <div className="d-flex flex-column row-gap-4 tank-shells-row">
        {tankShells.map((shell) => (
          <OverlayTrigger key={shell.id} trigger="click" placement="auto" show={activeShellId === shell.id} overlay={popover(shell)} rootClose onToggle={(nextShow) => {
            if (!nextShow && activeShellId === shell.id) {
              setActiveShellId(null)
              setVehicle(null)
            }
          }}>
            <Button
              variant="transparent"
              className="border-0 text-light d-inline-flex align-items-center fs-5 column-gap-1"
              onClick={() => handleShellClick(shell.id)}
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
