import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { editarUsuarioApi, obtenerUsuarioApi } from "../../helpers/queris";
import Swal from "sweetalert2";

const EditarUsuario = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      nombreUsuario: "",
      precio: 1,
      imagen: "",
      detalle: "",
      categoria: "",
    },
  });
  const navegacion = useNavigate();

  const onSubmit = (datos) => {
    console.log(datos)
    editarUsuarioApi(id, datos).then((datos) => {
      if (datos.status === 200) {
        Swal.fire("Usuario actualizado", "Bien!", "success");
        navegacion("/usuarios")
      } else {
        Swal.fire("Ocurrio un error", "Intente mas tarde", "error");
      }
      
    });
  };

  useEffect(() => {
    obtenerUsuarioApi(id).then((respuesta) => {
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
      <h1 className="display-4 mt-5">Editar usuario</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formid">
          <Form.Label>ID Usuario*</Form.Label>
          <Form.Control
            type="text"
            disabled
            {...register("id")}
           
          />
        
          <Form.Text className="text-danger">
            {errors.id?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNombreUsuario">
          <Form.Label>Nombre del usuario*</Form.Label>
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
            {errors.nombreUsuario?.message}
          </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email del usuario*</Form.Label>
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
            {errors.detalleUsuario?.message}
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
                message: "El precio de usuario como maximo debe ser de 10000",
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

export default EditarUsuario;