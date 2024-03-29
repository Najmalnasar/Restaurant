import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"

function Header() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" >Restaurant</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Location</Nav.Link>
                        <Nav.Link href="#features">Aboout</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header
