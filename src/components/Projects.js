import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "../styles/projects.css";

const Projects = () => (
  <section>
    <h1 className="title">Projetos</h1>
    <span className="info">
      <h4>A seguir, alguns projetos que realizei como forma de estudar programação:</h4>
    </span>
    <Container>
      <Row>
        <Col className="project-grid" sm={4} gap={3}>
          <h3 className="project-name">To Do List</h3>
          <h5>Uma To Do List criada para aprender sobre o Back-End</h5>
          <a className="code-button" type="button" href="#">Ver código</a>
          <a className="project-button" type="button" href="#">Ver código</a>
        </Col>
        <Col className="project-grid" sm={4}>
          <h3 className="project-name">Clone SpaceX</h3>
          <h5>Um clone do site da SpaceX, feito com HTML, CSS e Bootstrap.</h5>
          <a className="code-button" type="button" href="#">Ver código</a>
          <a className="project-button" type="button" href="#">Ver código</a>
        </Col>
        <Col className="project-grid" sm={4}>
          <h3 className="project-name">Pokédex</h3>
          <h5>Um site sobre pokémon, feito com JavaScript, React, HTML e CSS.</h5>
          <a className="code-button" type="button" href="#">Ver código</a>
          <a className="project-button" type="button" href="#">Ver código</a>
        </Col>
      </Row>
      <Row>
        <Col className="project-grid" sm={4}>
          <h3 className="project-name">Clone Evernote</h3>
          <h5>Um clone do Evernote, feito com JavaScript, Bulma, React, NodeJS, Express, entre outros.</h5>
          <a className="code-button" type="button" href="#">Ver código</a>
          <a className="project-button" type="button" href="#">Ver código</a>
        </Col>
        <Col className="project-grid" sm={4}>
          <h3 className="project-name">App Rick and Morty</h3>
          <h5>Um site sobre Rick and Morty, feito com JavaScript, React, HTML e CSS.</h5>
          <a className="code-button" type="button" href="#">Ver código</a>
          <a className="project-button" type="button" href="#">Ver código</a>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Projects;