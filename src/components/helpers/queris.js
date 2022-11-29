const urlUsuario = "http://localhost:4000/apiEpik/user/usuarios";
const urlPedido = "http://localhost:4000/apiEpik/pedido/pedidos";
const URL = "http://localhost:4000/apiEpik/productos";
// USUARIOS
export const usuarioLogin = async (usuario) => {
  try {
    const respuesta = await fetch(urlUsuario);
    const listaUsuario = await respuesta.json();

    const usuarioBuscado = listaUsuario.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      console.log("Email encontrado");
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
      } else {
        console.log("El email no existe");
        return;
      }
    }
  } catch (error) {
    console.log("errores en el login");
    return;
  }
};
export const obtenerUsuarioApi = async (id) => {
  try {
    const respuesta = await fetch(urlUsuario + "/" + id);
    const usuarioBuscado = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };

    console.log(respuesta);
    return usuarioBuscado;
  } catch (error) {
    console.log(error);
  }
};
export const crearUsuario = async (usuario) => {
  try {
    const respuesta = await fetch(urlUsuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return;
  }
};
export const borrarUsuarioAPI = async (id) => {
  try {
    const respuesta = await fetch(urlUsuario + "/" + id, {
      method: "DELETE",
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
export const editarUsuarioApi = async (id, datosActualizados) => {
  try {
    console.log(id);
    const respuestaUsuario = await fetch(urlUsuario + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });
    console.log(respuestaUsuario);
    return respuestaUsuario;
  } catch (error) {
    console.log(error);
  }
};
export const consultarUsuarioApi = async () => {
  try {
    const respuesta = await fetch(urlUsuario);

    const listaUsuarios = await respuesta.json();
    console.log(respuesta);
    return listaUsuarios;
  } catch (error) {
    console.log(error);
  }
};
// PRODUCTOS
export const crearProductoApi = async (producto) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

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
    const respuesta = await fetch(URL);

    const listaProductos = await respuesta.json();

    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};
// PEDIDOS
export const consultarPedidoApi = async () => {
  try {
    const respuesta = await fetch(urlPedido);

    const listaPedidos = await respuesta.json();

    return listaPedidos;
  } catch (error) {
    console.log(error);
  }
};

export const borrarPedidoAPI = async (id) => {
  try {
    const respuesta = await fetch(urlPedido + "/" + id, {
      method: "DELETE",
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerPedidoApi = async (id) => {
  try {
    const respuesta = await fetch(urlPedido + "/" + id);
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
export const editarPedidoApi = async (id, datosActualizados) => {
  try {
    const respuesta = await fetch(urlPedido + "/" + id, {
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
