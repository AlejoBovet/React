import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(( ) => {
        //para cuando se monta el componenete
        alert("el componente esta montado 'avisocomponenet'")

        //Cuando el componenet se desmonta
        return () => {
            alert("componente desmontado")
        };

    }, [])// se ejecuta una vez  porque le paso el array vacio



  return (
    <div>
        <hr/>
        <h1> Saludoi Areho</h1>
        <button onClick={e => {
            alert("Bienvenido")
        }}>Mostrar Alerta</button>
    </div>
  )
}
