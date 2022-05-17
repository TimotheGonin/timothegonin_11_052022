import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StyledGlobalStyle from './utils/style/GlobalSyle'
import Home from './pages/Home'
import Rental from './pages/Rental'
import About from './pages/About'
import Error from './pages/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <StyledGlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rental" element={<Rental />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
