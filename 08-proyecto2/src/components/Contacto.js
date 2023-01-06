import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <form className='contact' action='mailto: alej@alej.cl'>
        <input type="text" placeholder="Nombre"/>
        <input type="text" placeholder="Apellido"/>
        <input type="text" placeholder="Email"/>
        <textarea type="text" placeholder="Nombre"/>
        <input type="submit" values="enviar"/>
      </form>
    </div>
  )
}
