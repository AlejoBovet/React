import React from 'react'


export const Editar = ({peli, conseguirPeliculas, seteditar, setlistadostate}) => {
    const titulo_componente = "editar Pelicula";

    const guardarEdicion = (e, id) => {
      e.preventDefault();

      //conseguor el target del evento
      let target = e.target;
      //buscar indice objeto a actualizar
      const peliculas_almacenadas = conseguirPeliculas();
      //console.log(peliculas_almacenadas)

      const indice = peliculas_almacenadas.findIndex(peli => peli.id === id);
      //console.log(indice);

       //crear objeto con ese indice
       let peli_actualizada ={
        id,
        Titulo: target.titulo.value,
        descripcion: target.descripcion.value,
      };

      //console.log(indice, peli_actualizada);

      //actulizar el elemento con ese indice 
      peliculas_almacenadas[indice] = peli_actualizada; 
      console.log(peliculas_almacenadas);


       // guardar el nuevo array 
       localStorage.setItem("pelis", JSON.stringify(peliculas_almacenadas));

       //actualizar estado
       setlistadostate(peliculas_almacenadas);
       seteditar(0);
    }  
      
    return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input type='text'
                   name='titulo'
                   className='titulo_editado'
                   defaultValue={peli.Titulo}/>

            <textarea name='descripcion'
                      defaultValue={peli.descripcion}
                      className='descripcion_editada'/>

            <input type="submit" className="editar" value="Actualizar"/>                     
        </form>
    </div>
  )
}

