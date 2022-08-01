import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'


import Home from './routes/Home'
import { AuthContextProvider } from './context/AuthContext'

function App() {
  return (
    <>
    <AuthContextProvider>
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path= '/contact' element={<Contact />} />
        <Route path= '/about' element={<About />} />
        <Route path= '/register' element={<Register />} />
        <Route path= '/login' element={<Login />} />

      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
