import React, { useEffect, useState } from "react";

const ItemPedido = ({
  nombre,
  precio,
  imagen,
  id,
  precioTotal,
  setPrecioTotal,
  listaPedido,
}) => {
    let [precioMenu, setPrecioMenu] = useState(parseInt(precio));
    let [cantidad, setCantidad] = useState(listaPedido[menuCantidad].cantidad);
    let menuCantidad = listaPedido.findIndex((x) => x.nombreMenu === nombre);



  useEffect(() => {
    setPrecioMenu(precio * cantidad);
  }, [cantidad]);

  const aumentarCantidad = () => {
    setCantidad((listaPedido[menuCantidad].cantidad += 1));
    localStorage.setItem("listaPedido", JSON.stringify(listaPedido));
    setPrecioTotal((precioTotal += parseInt(precio)));
  };

  const descontarCantidad = () => {
    if (cantidad > 1) {
      setCantidad((listaPedido[menuCantidad].cantidad -= 1));
      localStorage.setItem("listaPedido", JSON.stringify(listaPedido));
      setPrecioTotal((precioTotal -= parseInt(precio)));
    }
  };

  const borrarPedido = () => {
    setPrecioTotal(precioTotal - precioMenu);
    let lista2 = listaPedido.filter((item) => item.id != id);
    localStorage.setItem("listaPedido", JSON.stringify(lista2));
  };

  return (
    <article className="d-flex mt-4 itemPedido">
      <div className="me-2">
        <img className="w-100" src={imagen} alt={nombre} />
      </div>
      <div className="w-75 mt-3">
        <h6 className="h3 fw-bolder mb-0">{nombre}</h6>
        <div className="d-flex mt-2 mb-6">
          <button
            type="button"
            className="btnPedidos p-0 px-0 border-0"
            onClick={descontarCantidad}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <p className="mb-0 mx-1 border border-1 px-2">{cantidad}</p>
          <button
            type="button"
            className="btnPedidos p-0 px-1 border-0"
            onClick={aumentarCantidad}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <p className="fs-3">{precioMenu}</p>
      </div>
      <div className="mt-3">
        <button
          type="button"
          className="btnEliminar ms-5"
          onClick={borrarPedido}
        >
          <i className="fa-regular fa-rectangle-xmark"></i>
        </button>
      </div>
    </article>
  );
};

export default ItemPedido;