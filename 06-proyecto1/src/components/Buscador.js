import React, { useState } from 'react'

export const Buscador = ({listadostate, setlistadostate}) => {

  const [busqueda, setBusqueda] = useState('');
  const [NoEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    //crear estado y actualizarlo 
    setBusqueda(e.target.value);
    //console.log(busqueda);

    //filtrar para buscar concidencias
    let pelis_encontradas = listadostate.filter(peli => {
      return peli.Titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    //comprobar si hay un resultado

    if(busqueda.length <= 1 || pelis_encontradas <= 0){
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    }else{
      setNoEncontrado(false);
    }

    

    //console.log(pelis_encontradas);

    // actualizar estado del listado principal con lo que logre filtrar
    setlistadostate(pelis_encontradas);
  }

  return (
    <div className="search">
      <h3 className="title">Buscador : {busqueda}</h3>
      {NoEncontrado == true && (
        <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
      )}
          <form>
            <input type="text" 
                   id="search_field" 
                   name="busqueda"
                   autoComplete='0ff'
                   //value={busqueda}
                   onChange={buscarPeli}
            />
            <button id="search">Buscar</button>
          </form>
    </div>

        

    
  )
}
