import React from 'react'
import {Routes, Route, NavLink, BrowserRouter, Navigate} from 'react-router-dom';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error404 } from '../components/Error404';
import { Inicio } from '../components/Inicio';
import { InicioPanel } from '../components/panel/InicioPanel';
import { Persona } from '../components/Persona';
import { PanelControl } from '../components/PanelControl';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    
    <h1>Cabecera</h1>
    <hr/>

    <nav>
      <ul>
        <li>  <NavLink to="/inicio" className=
        {({isActive}) => isActive ? "activado" : ""}>Inicio</NavLink>  
        </li>
        <li>  <NavLink to="/contacto" className=
        {({isActive}) => isActive ? "activado" : ""}>Contacto</NavLink>  </li>
        <li>  <NavLink to="/articulos" className=
        {({isActive}) => isActive ? "activado" : ""}>Articulos</NavLink>  </li>
         <li>  <NavLink to="/Panel" className=
        {({isActive}) => isActive ? "activado" : ""}>Panel de control </NavLink>  </li>
      </ul>
    </nav>

    <section className="contenido-principal">
      {/* cargar componentes */}
      {/* aqui se carga el componenete que coinside con el path */}
    <Routes>
      
        <Route path='/' element={<Inicio/>} />
        <Route path='/inicio' element={<Inicio/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/articulos' element={<Articulos/>} />
        <Route path='/persona/:nombre/:apellido' element={<Persona/>} />
        <Route path='/persona/:nombre' element={<Persona/>} />
        <Route path='/persona' element={<Persona/>} />
        <Route path='/redirigir' element={<Navigate to="/persona/alejo/bovet"/>} />
        <Route path='*' element={<Error404/>} />
        
        <Route path='/panel/*' element={<PanelControl/>}>
            <Route path='inicio' element={<InicioPanel/>}/>
        </Route>

    </Routes>
    </section>

    <hr/>

    <footer>
    <h3>footer</h3>
    este es el pie de pagina  
    </footer>
    

    </BrowserRouter> 
  )
}
