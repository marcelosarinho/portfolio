import React from "react";
import "../styles/footer.css";
import { Github, Linkedin } from "react-bootstrap-icons";
import "../styles/footer.css";

const PortfolioFooter = () => (
  <footer className="footer">
    <div className="social-icons">
      <h5>Redes sociais</h5>
      <div className="social-logos">
        <a href="https://github.com/marcelosarinho" type="button">
          <Github color="black" width="45" height="45" />
        </a>
        <a className="linkedin-logo" href="https://www.linkedin.com/in/marcelo-sarinho-a4706923a/" type="button">
          <Linkedin width="45" height="45" />
        </a>
      </div>
    </div>
    <div className="copyright">
      <h5>Site feito por mim (Marcelo Sarinho)</h5>
    </div>
    <div className="made-with-react-bootstrap">
      <h5>Site criado utilizando <a className="site-name" href="https://reactjs.org/">React</a>, <a className="site-name" href="https://react-bootstrap.github.io/">React Bootstrap</a> e <a className="site-name" href="https://www.npmjs.com/package/react-bootstrap-icons">React Bootstrap Icons</a></h5>
    </div>
    <div className="images-undraw">
      <h5>As imagens foram baixadas do site <a className="site-name" href="https://undraw.co/">Undraw</a></h5>
    </div>
    <div className="animation-aos">
      <h5>As animações utilizadas são da biblioteca <a className="site-name" href="https://michalsnik.github.io/aos/">AOS</a></h5>
    </div>
  </footer>
)

export default PortfolioFooter;