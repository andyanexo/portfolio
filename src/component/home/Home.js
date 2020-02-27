import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/main.css";

import Nav from "../nav/nav";
import Footer from "../footer/footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <main id="home">
          <h1 className="lg-heading">
            Digitaliza tu
            <span className="text-secondary"> StartUp</span>
          </h1>
          <h2 className="sm-heading">
            Páginas web móvil y de Escritorio con Tecnología de punta
          </h2>
          <div className="icons">
            <Link to="#!">
              <i className="fab fa-twitter fa-2x"></i>
            </Link>
            <Link to="https://www.facebook.com/saim.afridi.902">
              <i className="fab fa-facebook fa-2x"></i>
            </Link>
            <Link to="#!">
              <i className="fab fa-linkedin fa-2x"></i>
            </Link>
            <Link to="https://github.com/SeemabKhalil">
              <i className="fab fa-github fa-2x"></i>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
