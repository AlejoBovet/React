import React, { useEffect, useState} from 'react'
import { Editar } from './Editar';


export const Listado = ({listadostate, setlistadostate}) => {

    //const [listadostate, setlistadostate] = useState([]);

    const [editar, seteditar] = useState(0);

    useEffect(()=>{
        //console.log("componentes del listado de peliculas cargado !! ");
        conseguirPeliculas();

    },[]);


    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem('pelis'));

        setlistadostate(peliculas);
        //console.log(peliculas);
        return peliculas;
    }

    const borrarPeli = (id) => {
        //alert(id)

        //Conseguir peliculas almacenadas 
        let pelis_almacenadas = conseguirPeliculas();

        //filtrar esas peliculas para que elimine del array la que no quiero
        let nuevo_array_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

        //console.log(pelis_almacenadas, nuevo_array_peliculas);

        //actualizar estado del listado
        setlistadostate(nuevo_array_peliculas);

        //actualizar los dartos en el localstorage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_peliculas));
    }

   


  return ( 

<>
{listadostate != null?
    listadostate.map(peli => {

    return (
        <article key={peli.id} className="peli-item">
            <h3 className='titulo'>{peli.Titulo}</h3>
            <p className="descricion">{peli.descripcion}</p>
            <button className="edit" onClick={() => seteditar(peli.id)}>Editar</button>
            <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

            {/* Aparece formulario de editor */}
            {editar === peli.id && (
                <Editar peli={peli}
                        conseguirPeliculas={conseguirPeliculas}
                        seteditar={seteditar}
                        setlistadostate={setlistadostate}/>
            )}
        </article>
    );
})

: <h2>no hay peliculas para mostrar</h2>
}
</>

    
  )
}
