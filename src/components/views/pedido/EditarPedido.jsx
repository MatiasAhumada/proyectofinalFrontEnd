import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { editarPedidoApi, obtenerPedidoApi } from "../../helpers/queris";
import Swal from "sweetalert2";

const EditarPedido = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      nombrePedido: "",
      precio: 1,
      imagen: "",
      detalle: "",
      categoria: "",
    },
  });
  const navegacion = useNavigate();

  const onSubmit = (datos) => {
    console.log(datos)
    editarPedidoApi(id, datos).then((datos) => {
      if (datos.status === 200) {
        Swal.fire("Pedido actualizado", "Bien!", "success");
        navegacion("/pedidos")
      } else {
        Swal.fire("Ocurrio un error", "Intente mas tarde", "error");
      }
      
    });
  };

  useEffect(() => {
    obtenerPedidoApi(id).then((respuesta) => {
      if (respuesta.status === 200) {
        console.log(respuesta.dato)
        setValue('id', respuesta.dato._id)
        setValue("nombre", respuesta.dato.nombre);
        setValue("email", respuesta.dato.email);
        setValue("password", respuesta.dato.password);
        console.log(respuesta);
      } else {
        Swal.fire("Ocurrio un error", "Intente mas tarde", "error");
      }
    });
  }, []);

  return (
    <div style={{
      backgroundColor: ''
    }}>
      <section className="container mainSection" >
      <h1 className="display-4 mt-5">Editar pedido</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formid">
          <Form.Label>ID Pedido*</Form.Label>
          <Form.Control
            type="text"
            disabled
            {...register("id")}
           
          />
        
          <Form.Text className="text-danger">
            {errors.id?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNombrePedido">
          <Form.Label>Nombre del pedido*</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej:  Pedro Perez"
            {...register("nombre", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 60,
                message: "Debe ingresar como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombrePedido?.message}
          </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email del pedido*</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej: pepito@gmail.com"
            {...register("email", {
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
            {errors.detallePedido?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Contraseña*</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Ej: Pepito123"
            {...register("password", {
              required: "El precio es un valor requerido",
              min: {
                value: 1,
                message: "El precio debe ser como minimo de $10",
              },
              max: {
                value: 1000,
                message: "El precio de pedido como maximo debe ser de 10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
    </div>
    
  );
};

export default EditarPedido;