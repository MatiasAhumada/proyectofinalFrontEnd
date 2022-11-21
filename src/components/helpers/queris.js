const URL = 'http://localhost:4001/apiEpik/productos'

export const borrarProductoAPI = async (id) => {
    try {
    
      const respuesta = await fetch(URL + "/" + id, {
        method: "DELETE",
      });
  
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  
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
  export const editarProductoApi = async (id, datosActualizados) => {
    try {
   
      const respuesta = await fetch(URL + "/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosActualizados),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  export const crearUsuario = async (usuario) =>{
    try {
        const respuesta = await fetch(URL,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        })
        return respuesta;
    } catch (error) {
        console.log(error)
        return;
    }
  }