import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './components/Hero.jsx'
import Navbar from "./components/Navbar.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
  </React.StrictMode>,
)
