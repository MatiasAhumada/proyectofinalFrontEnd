import { Button, Card, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import Swal from "sweetalert2";
import { crearUsuario } from "../helpers/queris";

const Register = () => {
  const {
    register,
    handleSubmit,
    fromState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (datos) =>{
    crearUsuario(datos).then((respuesta)=>{
        if(respuesta.status === 201){
            Swal.fire("usuario creado", " El usuario se creo correctamente", "success")
            
        }else{
            Swal.fire("Hubo un error inesperado", "Intentelo de nuevo mas tarde", "error")
        }
    })
  }

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header as="h4">Registro</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formNombreApellido">
              <Form.Label>Nombre y apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej:Juan Perez"
                {...register("nombre", {
                  required: "Complo obligatorio",
                  minLength: {
                    value: 5,
                    message: "Ingrese mínimo 5 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Ingresa máximo 50 caracteres",
                  },
                })}
              />
              <Form.text className="text-danger">
                {errors.nombre?.message}
              </Form.text>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: JuanPeres@mail.com"
                {...register("email", {
                  required: "Campo obligatorio",
                  minLength: {
                    value: 10,
                    message: "Ingrese mínimo 10 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Ingrese mínimo 50 caracteres",
                  },
                  pattern: {
                    value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                    message: "Ingresar un email valido",
                  },
                })}
              />
              <Form.text className="text-danger">
                {errors.email?.message}
              </Form.text>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresar contraseña"
                {...register("password", {
                  required: "Compo olbigatorio",
                  minLength: {
                    value: 5,
                    message: "Ingrsar mínimo 5 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "Ingresar máximo 30 caracteres",
                  },
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message: "Contraseña invalida",
                  },
                })}
              />
              <Form.text className="text-danger">
                {errors.password?.message}
              </Form.text>
            </Form.Group>
            <Button type="submit" className="mt-3">Crear Usuario</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
