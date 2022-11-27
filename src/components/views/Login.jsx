import { Button, Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { usuarioLogin } from "../helpers/queris";
import "../../css/views.css";



const Login = ({ setUsuarioLogeado }) => {
  const navegar = useNavigate();
  
  const isAdmin = {
    email: "",
    password: "",
    isAdmin: true
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      isAdmin: false
    },
  });

  const onSubmit = (dato) => {
    if(isAdmin === true ){
      usuarioLogin(dato).then((respuesta) => {
        if (respuesta) {
          localStorage.setItem("usuarioBar", JSON.stringify(respuesta));
          setUsuarioLogeado(respuesta);
          navegar("/administrar")
        } else {
          Swal.fire("Error", "Nombre de usuario o password incorrecto", "error");
        }
      });
    }else{
      usuarioLogin(dato).then((respuesta) => {
        if (respuesta) {
          localStorage.setItem("usuarioBar", JSON.stringify(respuesta));
          setUsuarioLogeado(respuesta);
          navegar("/")
        } else {
          Swal.fire("Error", "Nombre de usuario o password incorrecto", "error");
        }
      });
      
    }
  };
  


  return (
    <Container >
      <Card className="mt-4 w-100">
        <Card.Header as="h4">Login</Card.Header>
        <Card.Body >
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                {...register("email", {
                  required: "Campo obligatorio",
                  minLength: {
                    value: 2,
                    message: "Ingresar mínimo 2 dígitos",
                  },
                  maxLength: {
                    value: 50,
                    message: "Ingresar máximo 50 dígitos",
                  },
                  pattern: {
                    value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                    message: "Ingrese un email valido",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-dark">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su password"
                {...register("password", {
                  required: "Campo obligatorio",
                  minLength: {
                    value: 2,
                    message: "Contraseña invalida",
                  },
                  maxLength: {
                    value: 50,
                    message: "contraseña invalida",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-dark">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button type="submit" variant="success" className="mt-3">
              Ingresar
            </Button>
          </Form>
          <Link to={"/registro"} className="btn btn-outline-success mt-3">
            Crear cuenta
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
