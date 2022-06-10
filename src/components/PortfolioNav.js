import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/navbar.css";


const PortfolioNav = () => (
  <header>
    <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#about">Sobre mim</Nav.Link>
            <Nav.Link href="#projects">Projetos</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
            <Nav.Link href="#">Currículo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </header>
)

export default PortfolioNav;