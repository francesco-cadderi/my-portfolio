import React from 'react'
import ReactDOM from 'react-dom/client'
import Block from './components/Block.jsx'
import Navbar from "./components/Navbar.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Block>
      <h1>CIAO</h1>
    </Block>
    <Block>
      <h3>benvenuti qua</h3>
    </Block>
    <Block>
      <p>we come state ciao</p>
    </Block>
    <Block>
      <p>tutto bene grazie e tu?</p>
    </Block>
  </React.StrictMode>,
)
