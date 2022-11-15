
const URL = 'http://localhost:3004/productos';

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


