// import { Container, Image, Button, Popover, OverlayTrigger, Dropdown } from 'react-bootstrap'
// import { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { FaArrowLeftLong } from 'react-icons/fa6'

export default function Aams() {
  return (
    <Container className="p-4">
      <Button variant="primary" className="border-0 rounded-1 px-3 fs-5 d-inline-flex column-gap-1 mb-4 fw-semibold" href="/">
        <span className="d-flex align-items-center"><FaArrowLeftLong className="fs-5" /></span>
        <p className="my-auto">Back to Home</p>
      </Button>

      <h1>Air-to-Air Missiles</h1>

      <p>Air-to-Air Missiles amount: 0</p>

      <div className="d-flex flex-column row-gap-4 plane-aams-row"></div>
    </Container>
  )
}
