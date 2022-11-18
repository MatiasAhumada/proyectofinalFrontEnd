
const URL = 'http://localhost:4001/productos';

// peticion GET



export const consultarApi =async()=>{
    try {
        const respuesta = await fetch(URL);
        const listaProductos = await respuesta.json()
        return listaProductos;
    } catch (error) {
        console.log(error)
    }
}

export const crearProductoAPI = async(id)=> {
    try{
       
         const respuesta = await fetch(URL,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(id)

         });
        
        return respuesta;       
    }catch(error){
        console.log(error)
    }
}

export const obtenerProductoApi = async (id) => {
    try {
      
      const respuesta = await fetch(URL + "/" + id);
      const productoBuscado = {
        dato: await respuesta.json(),
        status: respuesta.status,
      };
  
      // console.log(respuesta)
      return productoBuscado;
    } catch (error) {
      console.log(error);
    }
  };
