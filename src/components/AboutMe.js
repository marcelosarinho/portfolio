import React, { useEffect } from "react";
import htmlLogo from "../assets/images/htmlLogo.png";
import cssLogo from "../assets/images/cssLogo.png";
import bulmaLogo from "../assets/images/bulmaLogo.png";
import bootstrapLogo from "../assets/images/bootstrapLogo.png";
import sassLogo from "../assets/images/sassLogo.png";
import javaScriptLogo from "../assets/images/javaScriptLogo.png";
import reactLogo from "../assets/images/reactLogo.png";
import cplusplusLogo from "../assets/images/cplusplusLogo.png";
import secondImage from "../assets/images/secondImage.svg";
import "../styles/aboutMe.css";
import Aos from "aos";
import "../../node_modules/aos/dist/aos.css";

const AboutMe = () => {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])

  return (
    <section id="about-me" className="about-me-section">
      <div className="about-me-general">
        <div data-aos="fade-right" data-aos-duration="1200" className="about-me-image-div">
          <img className="about-me-image" src={secondImage} alt="about-me-icon"></img>
        </div>
        <div className="about-me-info-div">
          <h1 data-aos="zoom-in" data-aos-duration="1200" className="title">Sobre mim</h1>
          <span data-aos="zoom-in" data-aos-duration="1200" className="info">
            <h4>Me chamo Marcelo Sarinho. Tive meu primeiro contato com a área de Tecnologia da Informação em 2021, na faculdade. Desde então, me apaixonei pela
              área e passei a estudar diariamente. Atualmente estou estudando Front-End e buscando um estágio, e espero futuramente tornar-me
              um desenvolvedor Full Stack.</h4>
            <h4>Sou uma pessoa muito determinada e ambiciosa.</h4>
            <h3 className="subtitle">O que eu faço?</h3>
            <h4>Desenvolvo o Front-End dos sites, conciliando a questão visual com a funcional (interação do usuário com o site).</h4>
          </span>
          <div data-aos="zoom-in" data-aos-duration="1200" className="button-div">
            <a className="btn btn-primary" href="#projects" type="button">Projetos</a>
          </div>
        </div>
      </div>
      <div className="about-me-technologies">
        <h3 data-aos="fade-down-right" data-aos-duration="1200" className="subtitle">Tecnologias que utilizo</h3>
        <div className="technologies-grid">
          <div data-aos="flip-left" data-aos-duration="1000" className="technology">
            <div className="technology-name">
              <h5>HTML</h5>
            </div>
            <div className="technology-image">
              <img src={htmlLogo} alt="html-logo"></img>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="1500" className="technology">
            <div className="technology-name">
              <h5>CSS</h5>
            </div>
            <div className="technology-image">
              <img src={cssLogo} alt="css-logo"></img>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="2100" className="technology">
            <div className="technology-name">
              <h5>Bulma</h5>
            </div>
            <div className="technology-image">
              <img src={bulmaLogo} alt="bulma-logo"></img>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="3000" className="technology">
            <div className="technology-name">
              <h5>Bootstrap</h5>
            </div>
            <div className="technology-image">
              <img src={bootstrapLogo} alt="bootstrap-logo"></img>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="2600" className="technology">
            <div className="technology-name">
              <h5>SASS / SCSS</h5>
            </div>
            <div className="technology-image">
              <img src={sassLogo} alt="bootstrap-logo"></img>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="900" className="technology">
            <div className="technology-name">
              <h5>JavaScript</h5>
            </div>
            <div className="technology-image">
              <img src={javaScriptLogo} alt="javaScript-logo"></img>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="2700" className="technology">
            <div className="technology-name">
              <h5>React</h5>
            </div>
            <div className="technology-image">
              <img src={reactLogo} alt="react-logo"></img>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-duration="3000" className="technology">
            <div className="technology-name">
              <h5>C++</h5>
            </div>
            <div className="technology-image">
              <img src={cplusplusLogo} alt="cplusplus-logo"></img>
            </div>
          </div>
        </div>
        <h3 data-aos="zoom-out" data-aos-duration="1200" className="observation">OBS: Também sei utilizar NodeJS, Express, MongoDB e Mongoose, porém sem muito aprofundamento.</h3>
      </div>
    </section>
  )
}

export default AboutMe;