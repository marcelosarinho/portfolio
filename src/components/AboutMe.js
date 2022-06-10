import React from "react";
import htmlLogo from "../assets/images/htmlLogo.png";
import cssLogo from "../assets/images/cssLogo.png";
import bulmaLogo from "../assets/images/bulmaLogo.png";
import bootstrapLogo from "../assets/images/bootstrapLogo.png";
import javaScriptLogo from "../assets/images/javaScriptLogo.png";
import reactLogo from "../assets/images/reactLogo.png";
import cplusplusLogo from "../assets/images/cplusplusLogo.png";
import secondImage from "../assets/images/secondImage.svg";
import "../styles/aboutMe.css";
import Button from "react-bootstrap/Button";

const AboutMe = () => (
  <section className="about-me-section">
    <div className="about-me-first-div">
      <img className="about-me-image" src={secondImage} alt="about-me-icon"></img>
    </div>
    <div className="about-me-second-div">
      <h1 className="title">Sobre mim</h1>
      <span className="info">
        <h4>Me chamo Marcelo Sarinho. Tive meu primeiro contato com a área de Tecnologia da Informação em 2021, na faculdade. Desde então, me apaixonei pela
          área e passei a estudar diariamente. Atualmente estou estudando Front-End e buscando um estágio, e espero futuramente tornar-me
          um desenvolvedor Full Stack.</h4>
        <h4>Sou uma pessoa muito determinada e ambiciosa.</h4>
        <h3 className="subtitle">O que eu faço?</h3>
        <h4>Desenvolvo o Front-End dos sites, conciliando a questão visual com a funcional (interação do usuário com o site).</h4>
      </span>
      <div className="button-div">
      <Button type="button" id="button">Projetos</Button>
      </div>
    </div>
  </section>
)

export default AboutMe;

/*

<h3 className="about-me-subtitle">Tecnologias</h3>
    <div className="about-me-third-div">
      <ul>
        <div className="technology-flex-div">
          <li className="technology-name">HTML</li>
          <img className="technology-logo" src={htmlLogo} alt="html-icon"></img>
        </div>
        <div className="technology-flex-div">
          <li className="technology-name">CSS</li>
          <img className="technology-logo" src={cssLogo} alt="css-icon"></img>
        </div>
        <div className="technology-flex-div">
          <li className="technology-name">Bulma</li>
          <img className="technology-logo" src={bulmaLogo} alt="bulma-icon"></img>
        </div>
        <div className="technology-flex-div">
          <li className="technology-name">Bootstrap</li>
          <img className="technology-logo" src={bootstrapLogo} alt="bootstrap-icon"></img>
        </div>
        <div className="technology-flex-div">
          <li className="technology-name">JavaScript</li>
          <img className="technology-logo" src={javaScriptLogo} alt="javascript-icon"></img>
        </div>
        <div className="technology-flex-div">
          <li className="technology-name">React</li>
          <img className="technology-logo" src={reactLogo} alt="react-icon"></img>
        </div>
        <div className="technology-flex-div">
          <li className="technology-name">C++</li>
          <img className="technology-logo" src={cplusplusLogo} alt="cplusplus-icon"></img>
        </div>
        <br />
        <br />
        OBS: Sei também um pouco sobre tecnologias Back-End, como o Express, NodeJS, MongoDB e Mongoose.
      </ul>
    </div>

*/