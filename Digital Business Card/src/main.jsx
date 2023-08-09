import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Info from "./components/info"
import About from "./components/about"
import Interests from "./components/interests"
import Footer from "./components/footer"

import "../App.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Info />
    <About />
    <Interests />
    <Footer />
  </React.StrictMode>,
)
