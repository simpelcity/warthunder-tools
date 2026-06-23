import { Link } from 'react-router-dom'
import { Container, Button, Image } from 'react-bootstrap'
import '@/styles/ui/Buttons.scss'
import '@/styles/pages/Home.scss'

export default function Home() {
  return (
    <Container className="p-4">
      <h1>War Thunder Ammo Tools</h1>

      <div className="d-flex flex-column gap-3 mt-4" style={{ maxWidth: '300px' }}>
        <Link to="/ammo/shells" className="text-decoration-none">
          <Button variant="primary" className="border-0 rounded-1 w-100 d-inline-flex justify-content-center align-items-center column-gap-1 fs-5">
            <span>Shells</span>

            <div className="shell-icon position-relative overflow-hidden">
              <div className="shell-icon_decor position-absolute w-100 h-100 start-0 top-0">
                <Image src="https://static.encyclopedia.warthunder.com/gui_skin/explosion_middle.png" alt="Damage" className="position-absolute w-100 start-0 top-0" />

                <Image src="https://static.encyclopedia.warthunder.com/gui_skin/armor_middle.png" alt="Armor" className="position-absolute w-100 start-0 top-0" />
              </div>

              <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                <Image src="https://static.encyclopedia.warthunder.com/gui_skin/apcbc_tank.png" alt="APCBC shell icon" className="h-100 flex-grow-0 flex-shrink-1" />
              </div>
            </div>
          </Button>
        </Link>

        <Link to="/ammo/sams" className="text-decoration-none">
          <Button variant="primary" className="border-0 rounded-1 w-100 d-inline-flex justify-content-center align-items-center column-gap-1 fs-5">
            <span>Surface-to-Air Missiles</span>

            <div className="shell-icon position-relative overflow-hidden">
              <div className="shell-icon_decor position-absolute w-100 h-100 start-0 top-0">
                <Image src="https://static.encyclopedia.warthunder.com/gui_skin/explosion_big.png" alt="Damage" className="position-absolute w-100 start-0 top-0" />

                <Image src="https://static.encyclopedia.warthunder.com/gui_skin/armor_vsmall.png" alt="Armor" className="position-absolute w-100 start-0 top-0" />
              </div>

              <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                <Image src="https://static.encyclopedia.warthunder.com/gui_skin/sam.png" alt="Surface-to-Air Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
              </div>
            </div>
          </Button>
        </Link>

        <Link to="/ammo/aams" className="text-decoration-none">
          <Button variant="primary" className="border-0 rounded-1 w-100 d-inline-flex justify-content-center align-items-center column-gap-1 fs-5">
            <span>Air-to-Air Missiles</span>

            <div className="shell-icon position-relative overflow-hidden">
              <div className="shell-icon_decor position-absolute w-100 h-100 start-0 top-0">
                <Image src="https://static.encyclopedia.warthunder.com/gui_skin/explosion_big.png" alt="Damage" className="position-absolute w-100 start-0 top-0" />

                <Image src="https://static.encyclopedia.warthunder.com/gui_skin/armor_vsmall.png" alt="Armor" className="position-absolute w-100 start-0 top-0" />
              </div>

              <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                <Image src="https://static.encyclopedia.warthunder.com/gui_skin/sam.png" alt="Air-to-Air Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
              </div>
            </div>
          </Button>
        </Link>
      </div>
    </Container>
  )
}
