import React, { useState } from 'react'
import { guardarenStorage } from '../helpers/GuardarenStorege';

export const Crear = () => {

  const TituloComponente = "Añadir Pelicula";

  const [pelistate, setpelistate]= useState({
    Titulo:'',
    descripcion:''
  });
  
  const {Titulo, descripcion} = pelistate;  

  const conseguirDatosForm = e => {
    e.preventDefault();

    //Conseguir Datos 

    let target = e.target;
    let Titulo = target.Titulo.value;
    let descripcion = target.descripcion.value;


    //alert( Titulo + "-" JSON.stringify(+ desc)ripcion);

    //Crear objeto de la pelicula guardada
    let peli = {
      id: new Date().getTime(),
      Titulo,
      descripcion
    };

    //Guardar estado  
    setpelistate(peli);

    //guaradar en el almacenamiento local
    guardarenStorage("pelis",peli);

    //console.log(pelistate);
  }

  



  return (
    <div className="add">
    <h3 className="title">{TituloComponente}</h3>

    <strong> {(Titulo && descripcion) && "has creado la pelicula:" +pelistate.Titulo} </strong> 

    <form onSubmit={conseguirDatosForm}>
        <input  type="text" 
                id="Titulo" 
                placeholder="Titulo" />

        <textarea id="descripcion" 
                  placeholder="Descripción"></textarea>

        <input  type="submit"    
                id="save"   
                value="Guardar" />

    </form>
</div>
  )
}
