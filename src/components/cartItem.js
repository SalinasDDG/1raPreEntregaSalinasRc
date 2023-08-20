import ListGroup from 'react-bootstrap/ListGroup';
import "./style.css";
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from './cartContext';


function HorizontalExample({id, nombre, cantidad, precio}) {
  const {removeItem} = useContext(CartContext);

  return (
    <ListGroup horizontal>
      <ListGroup.Item>Nombre: {nombre}</ListGroup.Item>
      <ListGroup.Item>Cantidad: {cantidad}</ListGroup.Item>
      <ListGroup.Item>Precio Unitario: ${precio} c/u</ListGroup.Item>
      <ListGroup.Item>Subtotal: ${precio * cantidad}</ListGroup.Item>
      <ListGroup.Item><Button id='btnBorrarLista' variant="outline-danger" onClick={() => removeItem(id)} >-</Button></ListGroup.Item>
    </ListGroup>
  );
}

export default HorizontalExample;

