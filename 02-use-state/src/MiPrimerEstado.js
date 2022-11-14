import React, {useState} from 'react';

export const MiPrimerEstado = () => {
    
    /* Problematica */
   /*  let nombre = "Alejo";

    const cambiarNombre = e => {
        nombre = "Arehandoro";
    } */

    const [ nombre, setnombre ] = useState("Alejo");

    const cambiarNombre = (e, nombrefijo) =>{
        setnombre(nombrefijo);
        console.log(nombrefijo)
    }

    return (
    <div>
        <h3> Componente:  Primer estado</h3>
        <strong>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={ e => cambiarNombre(e,"arehan") }>Cambiar</button>
        &nbsp;
        <input type="text" onKeyDown={ e => cambiarNombre(e, e.target.value)} placeholder='cambiar Nombre'/>
    </div>
  )
}
