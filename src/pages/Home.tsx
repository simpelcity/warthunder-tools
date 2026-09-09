import { Link } from 'react-router-dom'
import { Container, Button, Image, Row, Col } from 'react-bootstrap'
import '@/styles/ui/Buttons.scss'
import '@/styles/pages/Home.scss'

export default function Home() {
  return (
    <Container className="p-4">
      <h1>War Thunder Ammo Tools</h1>

      <Row className="row-gap-3">
        <Col xs={12} md={6} lg={4} xxl={3}>
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
        </Col>
        <Col xs={12} md={6} lg={4} xxl={3}>
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
        </Col>
        <Col xs={12} md={6} lg={4} xxl={3}>
          <Link to="/ammo/aams" className="text-decoration-none">
            <Button variant="primary" className="border-0 rounded-1 w-100 d-inline-flex justify-content-center align-items-center column-gap-1 fs-5">
              <span>Air-to-Air Missiles</span>

              <div className="shell-icon position-relative overflow-hidden">
                <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                  <Image src="https://static.encyclopedia.warthunder.com/gui_skin/air_to_air_missile.png" alt="Air-to-Air Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
                </div>
              </div>
            </Button>
          </Link>
        </Col>
        <Col xs={12} md={6} lg={4} xxl={3}>
          <Link to="/ammo/arms" className="text-decoration-none">
            <Button variant="primary" className="border-0 rounded-1 w-100 d-inline-flex justify-content-center align-items-center column-gap-1 fs-5">
              <span>Anti-Radiation Missiles</span>

              <div className="shell-icon position-relative overflow-hidden">
                <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                  <Image src="https://static.encyclopedia.warthunder.com/gui_skin/anti_radiation_type_b_missile.png" alt="Anti-Radiation Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
                </div>
              </div>
            </Button>
          </Link>
        </Col>
        <Col xs={12} md={6} lg={4} xxl={3}>
          <Link to="/ammo/agms" className="text-decoration-none">
            <Button variant="primary" className="border-0 rounded-1 w-100 d-inline-flex justify-content-center align-items-center column-gap-1 fs-5">
              <span>Air-to-Ground Missiles</span>

              <div className="shell-icon position-relative overflow-hidden">
                <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                  <Image src="https://static.encyclopedia.warthunder.com/gui_skin/agm_middle_missile.png" alt="Air-to-Ground Missile icon" className="h-100 flex-grow-0 flex-shrink-1" />
                </div>
              </div>
            </Button>
          </Link>
        </Col>
        <Col xs={12} md={6} lg={4} xxl={3}>
          <Link to="/ammo/bombs" className="text-decoration-none">
            <Button variant="primary" className="border-0 rounded-1 w-100 d-inline-flex justify-content-center align-items-center column-gap-1 fs-5">
              <span>Bombs</span>

              <div className="shell-icon position-relative overflow-hidden">
                <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                  <Image src="https://static.encyclopedia.warthunder.com/gui_skin/bomb_big_03.png" alt="Bomb icon" className="h-100 flex-grow-0 flex-shrink-1" />
                </div>
              </div>
            </Button>
          </Link>
        </Col>
        <Col xs={12} md={6} lg={4} xxl={3}>
          <Link to="/ammo/tank-belts" className="text-decoration-none">
            <Button variant="primary" className="border-0 rounded-1 w-100 d-inline-flex justify-content-center align-items-center column-gap-1 fs-5">
              <span>Tank Belts</span>

              <div className="shell-icon position-relative overflow-hidden">
                <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                  <Image src="https://static.encyclopedia.warthunder.com/gui_skin/bullet_cannon_blue_yellow.png" alt="" className="h-100 flex-grow-0 flex-shrink-1" />
                  <Image src="https://static.encyclopedia.warthunder.com/gui_skin/bullet_cannon_red_blue_green.png" alt="" className="h-100 flex-grow-0 flex-shrink-1" />
                  <Image src="https://static.encyclopedia.warthunder.com/gui_skin/bullet_cannon_red_blue.png" alt="" className="h-100 flex-grow-0 flex-shrink-1" />
                  <Image src="https://static.encyclopedia.warthunder.com/gui_skin/bullet_gun_red_blue.png" alt="" className="h-100 flex-grow-0 flex-shrink-1" />
                </div>
              </div>
            </Button>
          </Link>
        </Col>
        <Col xs={12} md={6} lg={4} xxl={3}>
          <Link to="/ammo/rockets" className="text-decoration-none">
            <Button variant="primary" className="border-0 rounded-1 w-100 d-inline-flex justify-content-center align-items-center column-gap-1 fs-5">
              <span>Rockets</span>

              <div className="shell-icon position-relative overflow-hidden">
                <div className="shell-icon_base position-absolute w-100 h-100 start-0 top-0 d-flex mw-100 align-items-center justify-content-center">
                  <Image src="https://static.encyclopedia.warthunder.com/gui_skin/rocket.png" alt="Rocket icon" className="h-100 flex-grow-0 flex-shrink-1" />
                </div>
              </div>
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
