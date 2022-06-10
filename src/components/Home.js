import React from "react";
import "../styles/home.css";
import firstImage from "../assets/images/firstImage.svg";
import Button from "react-bootstrap/Button";

const Home = () => (
  <section className="home-section">
    <div className="home-first-div">
      <h1 className="home-info">
        Olá, me chamo
        <span className="home-name"> Marcelo Sarinho.</span>
        <br />
        Sou um web-developer com foco em Front-End.
      </h1>
      <Button type="button" id="button">Sobre mim</Button>
    </div>
    <div className="home-second-div">
      <img className="home-image" src={firstImage} alt="developer-icon"></img>
    </div>
  </section>
)

export default Home;