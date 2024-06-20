import { useState } from 'react'
import Register from "./components/Register"
import Login from "./components/Login"
import Navbar from './components/Navbar/Navbar'
import { GlobalStyled } from "./GlobalStyled"

function App() {

  return (
    <>
      <GlobalStyled />
      <Navbar />
      <Login />
    </>
  )
}

export default App
