import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI, consultarAPI } from "../../helpers/queries";

const itemProducto = ({ producto, setProductos }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "¿Estas seguro que deseas eliminar el producto?",
      text: "No se puede revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarProductoAPI(producto.id).then((respuesta) => {
          if (respuesta.status === 200) {

            consultarAPI().then((respuesta)=>{
              setProductos(respuesta)

            })

            Swal.fire(
              "Producto eliminado",
              "El producto fue correctamente borrado",
              "success"
            );
          } else {
            Swal.fire(
              "Se produjo un error",
              "Intente realizar esta operacion mas tarde",
              "success"
            );
          }
        });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td>{producto.imagen}</td>
      <td>{producto.categoria}</td>
      <td>
        <Link className="btn btn-warning"to={`/administrar/editar/${producto.id}`}> Editar</Link>
        <Button variant="danger" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default itemProducto;
