import React, { Component } from "react";

import Nav from "../nav/nav";
import Footer from "../footer/footer";
import Pic from "../../portrait_small.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <Nav />

        {/* shaaaa */}

        <main id="about">
          <h1 className="lg-heading">
            Sobre
            <span className="text-secondary"> Nosotros</span>
          </h1>
          <h2 className="sm-heading">Somos lider en el mercado penquista</h2>
          <div className="about-info">
            <img src={Pic} alt="Seemab khalil" className="bio-image" />
            <div className="bio">
              <h3 className="text-secondary">Mision</h3>
              <p>
                Garantizar optmizacion tecnológica a emprendimientos
                comprometidos con su
                <b> responsabilidad social</b>
              </p>
            </div>

            <div className="job job-1">
              <h3>Desarrollo Web</h3>
              <h4>Desde $89.990</h4>
              <p>
                I worked in many Websites and also desing many pages.I worked in
                Modern tech like Loopback,Swagger and many More.
              </p>
            </div>

            <div className="job job-2">
              <h3>Modelamiento de Modelos Predictivos</h3>
              <h4>Desde $89.990</h4>
              <p>
                Alot of worked in to desing many pages and websites for
                Interactive Wings and Worked on many tools and new tech to used
                in Front-end-Development.
              </p>
            </div>

            <div className="job job-3">
              <h3>Asesoría en Programacion e Inteligencia de Negocios</h3>
              <h4>Desde $89.990</h4>
              <p>
                Online Working to design logo,icons and Websites templates and
                many more Worked include in Our Resume.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default About;
