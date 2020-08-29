import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Me from "./components/Me";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact component={Me} />
          </Switch>
        </BrowserRouter>
      </main>
    </React.Fragment>
  );
}

export default App;
