//impórtar modulos
import React from "react";

//funcion 
const Micomponente = () => {

    const nombre = 'Alejandro';
    const web = 'alejoweb.es';

    let usuario = {
        nombre: 'alejo',
        apellido: 'bovet',
        web: 'alejoweb.es'
    };

    return( 
    <div className="mi-componente">

    <hr/>
    <h2>Componente creado </h2>
    <h3> Datos usuario: </h3>
    <ul>
        <li>Nombre: <strong>{usuario.nombre}</strong> </li>
        <li>apellido: <strong>{usuario.apellido}</strong> </li>
        <li>Web: <strong>{usuario.web}</strong> </li>
    </ul>
    <p> este es mi primer comentario </p>
    <ul>
        <li>
            React
        </li>
        <li>
            angular
        </li>
        <li>
            Vue
        </li>
    </ul>

    </div>
    
    )
    
}

//export

export default Micomponente; 