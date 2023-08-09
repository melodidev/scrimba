import React from "react"
import ReactDOM from "react-dom/client"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css"

import Navbar from "./components/Navbar"
import Form from "./components/Form"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Form />
  </React.StrictMode>,
)