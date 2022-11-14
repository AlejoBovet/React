import React, {useEffect, useState} from 'react'
export const Ajaxcomponent = () => {

    const [usuarios, setusuario] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrors] = useState("");
     //generico - basico 

    const getUsuarioEstaticos = () => {
        setusuario([
            {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                
            }
        ]); 
    };

    const apireact = () => {
        fetch("https://reqres.in/api/users?page=1")
        .then(response => response.json())
        .then(
            resultado_final => {
                setusuario(resultado_final.data);
                console.log('funciona')
            },
            error =>{
                console.log(error);
            }
        )
    }

    const apiAW = () => {

        setTimeout(async()=>{
        try{
            const peticion = await fetch("https://reqres.in/api/users?page=1");
            const {data} = await peticion.json();

        //console.log(data);
        setusuario(data);
        setCargando(false);
        } catch(error){
            console.log(error);
            setErrors(error.message);
        }
        }, 5000)

        

    }

    useEffect(() => {
        //getUsuarioEstaticos();
        //apireact();
        apiAW();
    }, []);


    if(errores !== ""){
        return(
            //Cuando hay un error
            <div className='error'> {errores} </div>
            );
    }
    else if (cargando == true){
        return(
        //Cuando esta cargando
        <div className='cargando'> cargando datos.... </div>
        );
    }
    else if(cargando == false && errores == ""){
         //cuando,todo a ido bien
        return (
            <div>
        
                <h1> Listado de ususarios via Ajax </h1>
        
                <ol className='usuarios'>
        
                    {
                        usuarios.map(usuarios => {
                            console.log(usuarios)
                            return <li key={usuarios.id}>{usuarios.first_name} {usuarios.last_name}</li>
                        })    
                    }
        
                </ol>
            </div>
          )
    }

 

   
 
  
}
