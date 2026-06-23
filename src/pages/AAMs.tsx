import { Container, Image, Button, Popover, OverlayTrigger, Dropdown } from 'react-bootstrap'
import { useState } from 'react'

export default function AAMs() {
  return (
    <Container className="p-4">
      <h1>AAMs</h1>

      <p>AAMs amount: 0</p>

      <div className="d-flex flex-column row-gap-4 plane-aams-row"></div>
    </Container>
  )
}
