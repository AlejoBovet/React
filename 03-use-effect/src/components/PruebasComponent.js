import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export default function PruebasComponent() {

    const  [usuario, setusuario] = useState("Alejo")
    const [fecha, setfecha] = useState("01/01/2000");
    const [contador, setcontador] = useState(0);

    const modUsuario = e => {
        setusuario(e.target.value);
    };

    const cambiarFechA = e => {
        setfecha(new Date().toLocaleDateString());
    }

    //solo se ejecuta una vez, solo al cargar el componente
    useEffect(() => {
        console.log("has cargo el conponente")
    }, [])

    useEffect(() => {


        
        setcontador(contador+1);
        console.log("has cambiao al usuario:" + contador)


    }, [usuario, fecha])

 
  return (
    <div>
        <h1> El efecto - hook useEffect </h1>

        <strong className= { contador > 10 ? 'label label-green' : 'label' }> {usuario} </strong>
        <strong>{fecha}</strong>

        <p>

        <input type="text" 
               onChange={ modUsuario } 
               placeholder="cambiar el nombre"
               />

               <button onClick={cambiarFechA}>Cambiar Date</button>

        </p>

        {usuario == 'Arehandoro' && <AvisoComponent/>}

        
    </div>
  )
}
