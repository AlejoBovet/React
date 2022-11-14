import React, { useEffect, useState } from 'react'

export const Listado = () => {

    const [listadostate, setlistadostate] = useState([]);

    useEffect(()=>{
        //console.log("componentes del listado de peliculas cargado !! ");
        conseguirPeliculas();

    },[])


    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem('pelis'));

        setlistadostate(peliculas);
        //console.log(peliculas);
    }

   


  return ( 

<>
{listadostate != null?
    listadostate.map(peli => {

    return (
        <article key={peli.id} className="peli-item">
            <h3 className='titulo'>{peli.Titulo}</h3>
            <p className="descricion">{peli.descripcion}</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article>
    );
})

: <h2>no hay peliculas para mostrar</h2>
}
</>

    
  )
}
