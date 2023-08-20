import Card from 'react-bootstrap/Card';
import "./style.css";
import ItemCount from './contador';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from './cartContext';


const ItemDetail = ({id, nombre, precio, stock, categoria, imagen}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)


    const {addItem} = useContext (CartContext);

    const handleOnAdd = (cantidad) => {setQuantityAdded(cantidad)
       
        const item = {
            id, nombre, cantidad, precio}

        addItem(item, cantidad)
    }


    return (
        <div>
        <Card id='cardDetail' className='container' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} alt={nombre}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                    <p>               
                        Precio ${precio} 
                    <br/>
                        Stock disponible : {stock}
                    </p>
                    </Card.Text>
                <div>
                    { quantityAdded > 0 ? (
                        
                         <div className="botonIrAlCarrito">
                            <p>"Se agregó al carrito"</p>
                            <div id='divInter'>
                                <Button  variant="outline-warning" ><Link className='btnAProductos' to='/productos' id='botonTerminar'>Agregar más productos</Link></Button>
                            </div>
                            <div>
                            <Button variant="outline-success"><Link  to='/carrito' id='botonTerminar'>Terminar compra</Link></Button>
                            </div>
                        </div> )
                        : (<ItemCount initial={1} stock={stock} onAdd={(handleOnAdd)}/>)
                    }
                </div>
            </Card.Body>
        </Card>

    </div>

    )

}

export default ItemDetail;