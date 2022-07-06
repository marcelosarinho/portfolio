import React from "react";
import "../styles/projects.css";
import cloneSpaceXImg from "../assets/images/cloneSpaceX.png";
import pokedexImg from "../assets/images/pokedex.png";
import rickAndMortyAppImg from "../assets/images/rickAndMortyApp.png";
import cloneEvernoteJSImg from "../assets/images/cloneEvernoteJS.png";
import toDoListImg from "../assets/images/toDoList.png";

const Projects = () => (
  <section id="projects" className="projects-section">
    <h1 data-aos="fade-down" data-aos-duration="1200" className="title">Projetos</h1>
    <span className="info">
      <h4 data-aos="fade-down" data-aos-duration="1500">A seguir, alguns projetos que realizei como forma de estudar programação:</h4>
    </span>
    <div className="projects-div">
      <div data-aos="fade-right" data-aos-duration="1200" className="project left-project">
        <div className="project-info info-left">
          <h3 className="project-title-left">To Do List</h3>
          <h5>To Do List criada durante o curso Programador Full Stack Javascript, da OneBitCode. O foco nesse projeto foi aprender sobre o back-end,
            utilzando NodeJS, MongoDB, Mongoose e Express, além de EJS.
          </h5>
          <a className="project-button" type="button" href="#">Ver projeto</a>
          <a className="code-button" href="https://github.com/marcelosarinho/To_Do_List" type="button">Ver código</a>
        </div>
        <div className="project-image image-left">
          <img src={toDoListImg} alt="to-do-list"></img>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1200" className="project right-project">
        <div className="project-image image-right">
          <img src={cloneSpaceXImg} alt="cloneSpaceX"></img>
        </div>
        <div className="project-info info-right">
          <h3 className="project-title-right">Clone SpaceX</h3>
          <h5>Clone do site da SpaceX, criado durante o curso Programador Full Stack Javascript, da OneBitCode. O foco nesse projeto foi aprender sobre
            o front-end, utilizando HTML, CSS e o framework Bootstrap. </h5>
          <a className="project-button" type="button" href="#">Ver projeto</a>
          <a className="code-button" href="https://github.com/marcelosarinho/projeto_clone_spacex" type="button">Ver código</a>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="1200" className="project left-project">
        <div className="project-info info-left">
          <h3 className="project-title-left">Pokédex</h3>
          <h5>Site de Pokédex sobre Pokémon, criado assistindo uma aula do canal pasquadev. O foco nesse projeto foi praticar HTML, CSS, JavaScript e
            React (principalmente), criando um site com informações de todos os pokémons. A API utilizada foi a PokéAPI.
          </h5>
          <a className="project-button" type="button" href="#">Ver projeto</a>
          <a className="code-button" href="https://github.com/marcelosarinho/pokedex" type="button">Ver código</a>
        </div>
        <div className="project-image image-left">
          <img src={pokedexImg} alt="pokedex"></img>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1200" className="project right-project">
        <div className="project-image image-right">
          <img src={cloneEvernoteJSImg} alt="clone-evernote-js"></img>
        </div>
        <div className="project-info info-right">
          <h3 className="project-title-right">Clone Evernote</h3>
          <h5>Clone do aplicativo Evernote, criado durante o curso Programador Full Stack Javascript, da OneBitCode. O foco nesse projeto foi praticar tanto
            o front-end quanto o back-end, utilizando as tecnologias aprendidas durante o curso (NodeJS, React, Express, MongoDB, Mongoose, Bulma, JavaScript,
            entre outros.)
          </h5>
          <a className="project-button" type="button" href="#">Ver projeto</a>
          <a className="code-button" href="https://github.com/marcelosarinho/cloneEvernote" type="button">Ver código</a>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="1200" className="project left-project">
        <div className="project-info info-left">
          <h3 className="project-title-left">App Rick and Morty</h3>
          <h5>Site sobre Rick and Morty. O foco nesse projeto foi, novamente, praticar HTML, CSS, JavaScript e React. A API utilizada foi a
            The Rick and Morty API.
          </h5>
          <a className="project-button" type="button" href="#">Ver projeto</a>
          <a className="code-button" href="https://github.com/marcelosarinho/rickAndMortyApp" type="button">Ver código</a>
        </div>
        <div className="project-image image-left">
          <img src={rickAndMortyAppImg} alt="rickAndMortyApp"></img>
        </div>
      </div>
    </div>
  </section>
)

export default Projects;