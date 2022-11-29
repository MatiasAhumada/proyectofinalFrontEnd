import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { crearProductoApi } from "../../helpers/queris";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombreProducto: "",
      precio: 1,
      imagen: "",
      detalle: "",
      categoria: "",
    },
  });
  const navegacion = useNavigate();

  const onSubmit = (datos) => {
    crearProductoApi(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Producto creado",
          "El producto fue creado correctamente",
          "success"
        );
        reset();
        navegacion("/administrar");
      } else {
        Swal.fire("Ocurrio un error ", "Intentelo mas tarde", "error");
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej:  Taco Epiko"
            {...register("nombreProducto", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 20 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Detalle del producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej:  Este producto contiene los sigs ingredientes y detalles de la preparación"
            {...register("detalle", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 10,
                message: "Debe ingresar como minimo 10 caracteres",
              },
              maxLength: {
                value: 500,
                message: "Debe ingresar como maximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.detalleProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder=" Ej: 10"
            {...register("precio", {
              required: "El precio es un valor requerido",
              min: {
                value: 1,
                message: "El precio debe ser como minimo de $10",
              },
              max: {
                value: 1000,
                message: "El precio de producto como maximo debe ser de 10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/foto/alimentos-cocidos-en-placa-azul-2092507/"
            {...register("imagen", {
              required: "La url de la imagen es obligatoria",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una URL válida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoría",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="picante epiko">Picante epiko</option>
            <option value="medio picante">Medio picante</option>
            <option value="comida caliente">Comida Caliente</option>
            <option value="comida fria">Comida fria</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearProducto;
