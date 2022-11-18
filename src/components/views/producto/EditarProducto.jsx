import { useEffect } from "react";
import { Form, Button } from "react-bootstrap/lib/Navbar"
import { useParams } from "react-router-dom"
import { obtenerProductoApi } from "../../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const editarProducto = ()=>{

    const {id} = useParams();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({
        defaultValues:{
            nombreProducto:"",
            precio: 1,
            imagen:"",
            categoria:"",
        },
    });


    useEffect(()=>{
        obtenerProductoApi(id).then((respuesta)=>{
            if (respuesta.status === 200){
                setValue('nombreProducto', respuesta.dato.nombreProducto )
                setValue('nombreProducto', respuesta.dato.precio )
                setValue('nombreProducto', respuesta.dato.categoria )
                setValue('nombreProducto', respuesta.dato.imagen )
            }else{
                Swal.fire('Ocurrio un error', 'Intente este paso en unos minutos','error')
            }
        })
        
    },[])

    const onSubmit = (producto )=>{
        
    }

    return (
        <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr />
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "El precio es un valor requerido",
              min: {
                value: 1,
                message: "El precio como minimo debe ser de $1",
              },
              max: {
                value: 10000,
                message:
                  "El precio del producto como maximo debe ser de $10000",
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
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La url de la imagen es obligatoria",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una URL valida",
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
              required: "Debe seleccionar una categoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Comida caliente">Comida caliente</option>
            <option value="Comida rapida">Comida rapida</option>
            <option value="Postres">Postres</option>
            <option value="Salsas">Salsas</option>
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
    )
}

export default editarProducto;


