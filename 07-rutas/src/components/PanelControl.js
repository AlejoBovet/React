import React from 'react'
import { Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>PANEL DE CONTROL</h1>
        <p>Elige una de estas opciones</p>
        <nav>
            <ul>
                <li>
                    <a href="/panel/inicio">Inicio</a>
                </li>
                <li>
                    <a href="/panel">Crear</a>
                </li>
                <li>
                    <a href="">articulos</a>
                </li>
            </ul>
        </nav>
        <div>
        <Outlet/>
        </div>
    </div>
   
  )
}
