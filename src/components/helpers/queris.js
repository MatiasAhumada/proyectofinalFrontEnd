const urlUsuario = "http://localhost:3004/usuario"

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