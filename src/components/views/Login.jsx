import { Button, Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Container>
      <Card className="mt-4">
        <Card.Header as="h4">Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit()}>
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
                    value: 10,
                    message: "Ingresar máximo 10 dígitos",
                  },
                  pattern: {
                    value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                    message: "Ingrese un email valido",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger">
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
                    value: 10,
                    message: "contraseña invalida",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger">
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
