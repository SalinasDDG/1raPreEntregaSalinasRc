import {useState} from "react";
import Button from 'react-bootstrap/Button';
import "./style.css";


function ItemCount( {stock, initial, onAdd} ){

    const [cantidad, setCantidad] = useState(initial)

    const sumar = () =>{if(cantidad < stock){setCantidad(cantidad+1)}}
    const restar = () =>{if(cantidad > 1){setCantidad(cantidad-1)}}


    return(
    <div>
        <div className="sumadorStock">
        <Button variant="outline-danger" onClick={restar} >-</Button>
        <h4>{cantidad}</h4>
        <Button variant="outline-success" onClick={sumar} >+</Button>
        </div>
        <div className="botonCarrito"><Button className="btnAProductos" variant="outline-warning" onClick={() => onAdd(cantidad)} disabled={!stock} >Agregar al carrito</Button></div>
    </div>
    )

}

export default ItemCount;