import { useState } from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'


import Inicio from './pages/Inicio/Inicio'
import Alumnos from './pages/Alumnos/Alumnos'
import DetalleAlumno from './pages/Alumnos/DetalleAlumno'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Desarrollo Web: Front end</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/alumnos' element={<Alumnos />} />
        <Route path='/alumnos/alumno' />
      </Routes>
    </>
  )
}

export default App
