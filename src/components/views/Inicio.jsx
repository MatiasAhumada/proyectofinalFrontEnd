import React from 'react';
import "../../css/inicio.css";
import Portada from "../home/Portada"
import Info from "../home/Info"
import Drinks from "../home/Drinks"
import FastFood from '../home/FastFood';
import ProductosMenu from '../home/ProductosMenu';


const Inicio = () => {
//     const [producto, setProducto] = useState([]);
 
//   useEffect(() => {
//     consultarApi().then((respuesta) => {
//       console.log(respuesta);
//       setProducto(respuesta);
//     });
//   }, [])

    return (
        <section>
            <Portada></Portada>
            <Info></Info>
            <Drinks></Drinks>
            <FastFood></FastFood>
            <ProductosMenu></ProductosMenu>
        </section>
        
    );
};

export default Inicio;