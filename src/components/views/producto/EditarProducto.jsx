import { Form, Button } from "react-bootstrap";

const EditarProducto = () => {
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Cafe" />
          <Form.Text className="text-danger">algun error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="Ej: 50" />
          <Form.Text className="text-danger">algun error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/8230019/pexels-photo-8230019.jpeg?auto=compress&cs=tinysrgb&w=300"
          />
          <Form.Text className="text-danger">algun error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una opcion</option>
            <option value="picante epiko">Picante Epiko</option>
            <option value="medio picante">Medio Picante</option>
            <option value="comida caliente">Comida Caliente</option>
            <option value="comida fria">Comida Fria</option>
          </Form.Select>
          <Form.Text className="text-danger">algun error</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarProducto;
