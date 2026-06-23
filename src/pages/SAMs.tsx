import { Container, Image, Button, Popover, OverlayTrigger, Dropdown } from 'react-bootstrap'
import { useState } from 'react'

export default function SAMs() {
  return (
    <Container className="p-4">
      <h1>SAMs</h1>

      <p>SAMs amount: 0</p>

      <div className="d-flex flex-column row-gap-4 spaa-sams-row"></div>
    </Container>
  )
}
