import { useEffect, useState } from "react";
import ItemPedido from "./ItemPedido";
import { crearPedidoApi } from "../../helpers/queries";
import Swal from "sweetalert2";

const ListaPedido = ({ setMostrarCarrito }) => {
  let storageUser = JSON.parse(localStorage.getItem("usuarioActivo"));
  let listaCarrito = JSON.parse(localStorage.getItem("listaCarrito"));
  let [precioTotal, setPrecioTotal] = useState(0);
  let [pedido, setPedido] = useState({});


  useEffect(() => {
    setPedido({ nombreUsuario: storageUser, pedido: listaCarrito });
    listaCarrito.forEach((menu) => {
      setPrecioTotal(
        (precioTotal += parseInt(menu.precioMenu * menu.cantidad))
      );
    });
  }, []);

  const cerrarCarrito = () => {
    setMostrarCarrito(false);
  };


  const agregarPedido = () => {
    Swal.fire({
      title: "¿No te falta nada?",
      text: "¡Gracias por tu compra!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#c5350b",
      cancelButtonColor: "#000",
      cancelButtonTextColor: '#ffffff',
      confirmButtonText: "Si, enviar!",
    }).then((result) => {
      if (result.isConfirmed) {
        crearPedidoApi(pedido).then((respuesta) => {
          if (respuesta.status === 201) {
            Swal.fire(
              "Producto añadido",
              "El producto se agrego a su carrito",
              "success"
            );
          } else {
            Swal.fire(
              "Ocurrio un error",
              "El pedido no fue realizado exitósamente",
              "error"
            );
          }
        });
      }
    });
  };

  return (
    <section id="listaCarrito">
      <button className="listaCarrito__cerrar" onClick={cerrarCarrito}>
        <i className="fa-solid fa-right-from-bracket "></i>
      </button>
      <h3 className="cardMenu__nombre text-center mt-4">Mis pedidos</h3>
      <div className="listaCarrito__items">
        {listaCarrito.map((menu) => (
          <ItemCarrito
            key={menu.id}
            id={menu.id}
            nombre={menu.nombreMenu}
            precio={menu.precioMenu}
            imagen={menu.imagen}
            precioTotal={precioTotal}
            setPrecioTotal={setPrecioTotal}
            listaCarrito={listaCarrito}
          ></ItemCarrito>
        ))}
      </div>
      <div className="text-end mb-4">
        <p className="fs-2 fw-bolder mt-4">Total: ${precioTotal}</p>
        <button className="listaCarrito__btn" onClick={agregarPedido}>
          Enviar
        </button>
      </div>
    </section>
  );
};

export default ListaPedido;