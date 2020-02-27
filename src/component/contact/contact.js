import React, { Component } from "react";

import Nav from "../nav/nav";
import Footer from "../footer/footer";

class Contact extends Component {
  render() {
    return (
      <div>
        <Nav />

        <main id="contact">
          <h1 className="lg-heading">
            Contacta con
            <span className="text-secondary"> Nosotros</span>
          </h1>
          <h2 className="sm-heading">Version uno</h2>
          <div className="boxes">
            <div>
              <span className="text-secondary">Email: </span>{" "}
              andresdprogramador@gmail.com
            </div>
            <div>
              <span className="text-secondary">Whtsapp: </span> (+56) 9 35112223
            </div>
            <div>
              <span className="text-secondary">Linkedin: </span>{" "}
              https://www.linkedin.com/in/andres-donoso-923268185/
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default Contact;
