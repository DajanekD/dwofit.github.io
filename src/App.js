import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'


import Home from './routes/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path= '/contact' element={<Contact />} />
        <Route path= '/about' element={<About />} />
        <Route path= '/register' element={<Register />} />
        <Route path= '/login' element={<Login />} />

      </Routes>
    </>
  );
}

export default App;
