import React, { useEffect } from "react";
import "../styles/home.css";
import firstImage from "../assets/images/firstImage.svg";
import Aos from "aos";
import "../../node_modules/aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])

  return (
    <section id="home" className="home-section">
      <div data-aos="fade-right" data-aos-duration="1200" className="home-info-div">
        <h1 className="home-info">
          Olá, me chamo
          <span className="home-name"> Marcelo Sarinho.</span>
          <br />
          Sou um web-developer com foco em Front-End.
        </h1>
        <div className="about-me">
          <a className="btn btn-primary" href="#about-me" type="button">Sobre mim</a>
        </div>
      </div>
      <div data-aos="fade-down" data-aos-duration="1200" className="home-image-div">
        <img className="home-image" src={firstImage} alt="developer-icon"></img>
      </div>
    </section>
  )
}

export default Home;