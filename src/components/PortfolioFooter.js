import React from "react";
import "../styles/footer.css";
import { Github, Linkedin } from "react-bootstrap-icons";
import "../styles/footer.css";

const PortfolioFooter = () => (
  <footer className="footer">
    <div className="social-icons">
      <h5>Redes sociais</h5>
      <div className="social-logos">
        <a type="button" href="#">
          <Github color="black" width="45" height="45" />
        </a>
        <a type="button" href="#">
          <Linkedin width="45" height="45" />
        </a>
      </div>
    </div>
    <div className="copyright">
      <h5>Site feito por mim (Marcelo Sarinho)</h5>
    </div>
    <div className="made-with-react-bootstrap">
      <h5>Site criado utilizando React, React Bootstrap e React Bootstrap Icons</h5>
    </div>
    <div className="images-isometric">
      <h5>As imagens foram baixada do site Undraw</h5>
    </div>
  </footer>
)

export default PortfolioFooter;