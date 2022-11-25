
const urlUsuario = "http://localhost:3004/usuario"
// const URL = 'http://localhost:4001/apiEpik/productos'
const URL = 'http://localhost:4001/productos'


export const usuarioLogin = async (usuario) =>{
    try {
        const respuesta = await fetch(urlUsuario);
        const listaUsuario = await respuesta.json();

        const usuarioBuscado = listaUsuario.find((itemUsuario)=> itemUsuario.email === usuario.email)
        if(usuarioBuscado){
            console.log("Email encontrado")
            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado
            }else{
                console.log("El email no existe")
                return
            }
        }
    } catch (error) {
        console.log("errores en el login")
        return
    }
}
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




export const crearProductoAPI = async (producto) => {
  try{
      const respuesta = await fetch(URL,{
          method: "POST",
          headers:{
              "Content-Type":"application/json"
          },
          body: JSON.stringify(producto)
      });

      return respuesta;

  }catch(error){
      console.log(error)
  }
}


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

  export const consultarProductoApi = async () => {
    try {
      // fetch para peticiones
      // await para esperar
      const respuesta = await fetch(URL);
      // .json extrae datos en la propieda de la respuesta
      const listaProductos = await respuesta.json();
      console.log(respuesta);
      return listaProductos;

    } catch (error) {
      console.log(error);
    }
  };

 
