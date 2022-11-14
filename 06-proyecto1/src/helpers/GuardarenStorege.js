export const guardarenStorage = (clave, elemento)=> {

    
    //   conseguir elementos ya guardados en el localstrorage
    let elementos = JSON.parse(localStorage.getItem(clave));

    //

    // comprobar un array 
    if(Array.isArray(elementos)){
      //guardar dentro del array un elemento nuevo
      elementos.push(elemento);
    }else{
      //crear array con la peli nueva
      elementos = [elemento]; 
    }
    //console.log(elementos);
    // guardar en el local storage 
    localStorage.setItem(clave,JSON.stringify(elementos))
    //devolver objeto guardado
    return elemento;

    
  }