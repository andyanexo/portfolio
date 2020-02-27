import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Contact from "./component/contact/contact";
import Work from "./component/work/work";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/work" component={Work} />
      </div>
    </BrowserRouter>
  );
}

export default App;
