import { useState } from 'react';
import './App.css';
import Navbarr from './components/navbar';
import Hero from './components/hero';
import About from "./components/abaut";
import Servicios from "./components/servicios";
import Proyectos from './components/proyectos';
import Contacto from './components/contacto';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbarr></Navbarr>
      <Hero></Hero>
      <About></About>
      <Servicios></Servicios>
      <Proyectos></Proyectos>
      <Contacto></Contacto>
    </>
  )
}

export default App
