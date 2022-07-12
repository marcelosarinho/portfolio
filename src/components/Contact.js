import React from "react";
import "../styles/contact.css";

const Contact = () => (
  <section id="contact" className="contact-section">
    <h1 data-aos="fade-down-right" data-aos-duration="1200" className="title">Contato</h1>
    <span className="info">
      <h4 data-aos="fade-down-right" data-aos-duration="1200">
        Para entrar em contato comigo, basta clicar no botão abaixo e você poderá me mandar um e-mail:
      </h4>
    </span>
    <div data-aos="fade-down-right" data-aos-duration="1200" className="button-div">
      <a className="btn btn-primary" type="button" href="mailto:marceloactsarinho@gmail.com">Enviar e-mail</a>
    </div>
  </section>
)

export default Contact;