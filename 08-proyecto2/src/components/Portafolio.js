import React from 'react'
import { trabajos } from '../Data/Trabajos'

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'> Portafolio </h1>
    
    {
      trabajos.map(trabajos => {
        <article>
          <h2>{trabajos.nombre}</h2>
        </article>
      })


    }
    
    </div>

    
    
  )
}
