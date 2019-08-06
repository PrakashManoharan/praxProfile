import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faUserCircle,
  faHome,
  faAngleDown,
  faProjectDiagram,
  faMobile,
  faBriefcase,
  faUserTie,
  faEnvelope,
  faLaptopCode,
  faCode,
  faAddressCard,
  faDownload
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faCheckSquare,
  faUserCircle,
  faHome,
  faAngleDown,
  faProjectDiagram,
  faMobile,
  faBriefcase,
  faUserTie,
  faEnvelope,
  faLaptopCode,
  faCode,
  faAddressCard,
  faDownload
);

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path="/" component={Header} />
        </header>
        <Route path="/" component={Footer} />
      </div>
    </Router>
  );
}

export default App;
