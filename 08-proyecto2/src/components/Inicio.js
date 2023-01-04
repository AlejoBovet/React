import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy Alejandro valenzuela y soy <strong> desarrollador junior </strong>, me encuentro actualemnte estudiando y trabajando 
        estoy en busca de algun puesto de trabajo en el area de Desarrollador. 
      </h1>

      <h2>
        Mis lenjuages de programacion mas fuerte son python y javascript, en mneor medida c# junto con java.
        Ademas de conocer lenguaje de consulta SQL para oracle. <Link to="/contacto" > Contacta conmigo</Link>
      </h2>

      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos proyectos personales que he realizado</p>
        <div className='works'>
          
        </div>
      </section>
      
    </div>
  )
}
