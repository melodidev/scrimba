import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'

import Navbar from './components/Navbar'
import Card from './components/Card'
import data from "./data.js";

const cards = data.map((item, i) => {
  return (
    <Card key={item.key} isLastItem={i === data.length - 1} {...item} />
  )
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <div className='my-5'>{cards}</div>
  </React.StrictMode>,
);
