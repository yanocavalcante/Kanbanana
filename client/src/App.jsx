import { useState } from 'react'
import Register from "./components/Register"
import Login from "./components/Login"
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Login />
    </>
  )
}

export default App
