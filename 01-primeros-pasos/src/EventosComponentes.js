import React from 'react'

export const EventosComponentes = () => {

    const hasDadoclick = (e, nombre) => {
        alert("has dado click al boton"  +nombre );
    }

    function hasdadodobleclick(e){
        alert("has dado dobleckick")
    }

    const hasEntrado = (e,accion) => alert(`has ${accion} a la caja con el mouse`)

    const estasDentro = e => {console.log("estas dentro del input, coloca tu nombre")}

    const estasFuera = e => console.log("estas fuera adios!!")


  return (
    <div>
        <h1> Eventos react </h1>

        {/*  Evento click*/}

        {/* <button onClick={(e)=>{
            console.log(e)
            console.log("hola, soy un evento click");
        }}>Dame click!!!</button> */}
        <p>
        <button onClick={ e => hasDadoclick(e, "ale") }> Dame click</button>
        </p>

        {/* Evento Doble CLICK  */}
        <p>
        <button onDoubleClick={hasdadodobleclick}> Dame doble click</button>
        </p>

        {/* Evento onmouseEnter on mouseleave */}
        <div id="caja" 
        onMouseEnter={ e => hasEntrado(e, "entrado")} 
        onMouseLeave={e => hasEntrado(e, "salido")}>
        Pasa por encima!!!
        </div>

        {/* Onfocus y Onblur */}

        <p>
            <input type="text" 
            onFocus={ estasDentro }
            onBlur={ estasFuera} 
            placeholder="Introduce tu nombre..."/>
        </p>

        



    </div>
  )
}
