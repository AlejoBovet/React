import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

    const {nombre, apellido}= useParams();

    const navegar = useNavigate();
    
    const enviar = (e) => {
      e.preventDefault();
      let nombre = e.target.nombre.value;
      let apellido = e.target.apellido.value;
      let url = `/persona/${nombre}/${apellido}`;

      if(nombre.length <= 0 && apellido.length <= 0){
        navegar("/inicio");
      } else if(nombre==="contacto"){
        navegar("/contacto");
      }else{
        navegar(url);
      }
    }


  return (
    <div>
      {!nombre && <h1> no hay ninguna persona para mostrar</h1>}
      {nombre && <h1>Pagina es de Persona: {nombre} {apellido}</h1>}
        
        <p>Esta es la página de Personas</p>

      <form onSubmit={enviar}>
        <input type="text" name="nombre" />
          <br/>
        <input type="text" name="apellido"  />
          <br/>
        <input type="submit" name="enviar" value="enviar" />
      </form>

    </div>
  )
}
