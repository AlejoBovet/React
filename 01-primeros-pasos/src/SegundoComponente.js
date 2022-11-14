import React from 'react'

export const SegundoComponente = () => {

    const libros = ["harry potter", "juego de tronos", " clean code"];
    //const libros = [];

  return (
    <div className='segundo-componente'>

        <h1>Listado de libros</h1>
        {libros.length >= 1 ?
        ( 
        <ul>
            {/* forma Basica */}
            {/* <li>{libros[0]}</li>
            <li>{libros[1]}</li>
            <li>{libros[2]}</li> */}

            {/* FORMA PROFESIONAL */}
            {
                libros.map((libros, indice) => {
                    return <li key={indice}>{libros}</li>
                })
            }

        </ul>
        )
        :
        (
            <p>No hay libro</p>
        )
        }
    </div>
  )
}
