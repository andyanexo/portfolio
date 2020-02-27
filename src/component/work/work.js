import React, { Component } from "react";

import { Link } from "react-router-dom";

import Nav from "../nav/nav";
import Footer from "../footer/footer";
import Pic1 from "../../../src/assets/img/projects/project1.jpg";
import Pic2 from "../../../src/assets/img/projects/project2.jpg";
import Pic3 from "../../../src/assets/img/projects/project3.jpg";
import Pic4 from "../../../src/assets/img/projects/project4.jpg";

class Work extends Component {
  render() {
    return (
      <div>
        <Nav />
        <main id="work">
          <h1 className="lg-heading">
            Nuestros
            <span className="text-secondary">Productos</span>
          </h1>
          <h2 className="sm-heading">
            Algunos extractos de nuestro portafolio de proyectos
          </h2>
          <div className="projects">
            <div className="item">
              <Link to="#!">
                <img src={Pic1} alt="Project" />
              </Link>
              <Link to="#" className="btn-light">
                <i className="fas fa-eye"></i> Project
              </Link>
              <Link to="#" className="btn-dark">
                <i className="fab fa-github"></i> Github
              </Link>
            </div>
            <div className="item">
              <Link to="#!">
                <img src={Pic2} alt="Project" />
              </Link>
              <Link to="#" className="btn-light">
                <i className="fas fa-eye"></i> Project
              </Link>
              <Link to="#" className="btn-dark">
                <i className="fab fa-github"></i> Github
              </Link>
            </div>
            <div className="item">
              <Link to="#!">
                <img src={Pic3} alt="Project" />
              </Link>
              <Link to="#" className="btn-light">
                <i className="fas fa-eye"></i> Project
              </Link>
              <Link to="#" className="btn-dark">
                <i className="fab fa-github"></i> Github
              </Link>
            </div>
            <div className="item">
              <Link to="#!">
                <img src={Pic4} alt="Project" />
              </Link>
              <Link to="#" className="btn-light">
                <i className="fas fa-eye"></i> Project
              </Link>
              <Link to="#" className="btn-dark">
                <i className="fab fa-github"></i> Github
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Work;
