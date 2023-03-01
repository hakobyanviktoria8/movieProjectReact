import React from "react";
import "./App.css";
import "./Media.css";
import { NavBar } from "./MovieProject/NavBar/NavBar";
import { Footer } from "./MovieProject/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./MovieProject/Home/Home";
import { Contact } from "./MovieProject/Contact/Contact";
import { Faq } from "./MovieProject/Faq/Faq";

function App() {
  return (
    <div className={"App"}>
      <Router>
        <NavBar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movieProjectReact">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />{" "}
          </Route>
          <Route path="/faq">
            {" "}
            <Faq />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
