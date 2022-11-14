import React, { useState } from 'react'

export const FormularioComponent = () => {

  const[usuario, setusuario] = useState({});


  const conseguirDatosFormulario = e => {
    e.preventDefault();
    
    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      Bio: datos.Bio.value
    };

    //console.log(usuario);

    setusuario(usuario);
  }

  const cambiardatos = e => {
    //console.log(e.target.name);
    let name_del_input = e.target.name;
    let usuarioModificado = usuario;

    //usuarioModificado[name_del_input] = e.target.value;

    setusuario(estado_previo => {
      return {
        ...estado_previo,
        [name_del_input]: e.target.value
      }
    });
  }

  return (
    <div>

        <h1>Formulario con react</h1>

        { usuario.Bio && usuario.Bio.length >=1 &&

        (<div className='info_usuario'>
          {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su
          biiografia es esta: {usuario.Bio}
        </div>)

        }

        <form on onSubmit={conseguirDatosFormulario}>
          <input type='text' name='nombre' placeholder='Nombre' onChange={cambiardatos}/>
          <input type='text' name='apellido' placeholder='Apellido' onChange={cambiardatos}/>
          <select name='genero' onChange={cambiardatos}>
            <option value='hombre' >Hombre</option>
            <option value='mujer' >Mujer</option>
          </select>
          <textarea placeholder='Biografia' name='Bio' onChange={cambiardatos}></textarea>

          <input type="submit" value="Enviar"/>
        </form>

    </div>
  )
}
