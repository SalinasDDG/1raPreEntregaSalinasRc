import Card from 'react-bootstrap/Card';
import "./style.css";
import ItemCount from './contador';

const ItemDetail = ({id, nombre, precio, stock, categoria, imagen}) => {
    return (
        <div>
        <Card className='container' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} alt={nombre}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                Precio ${precio} - Stock disponible : {stock}
            </Card.Text>
            <ItemCount initial={1} stock={stock} onAdd={(cantidad) => console.log("Cantidad:", cantidad)}/>

            </Card.Body>
        </Card>

    </div>

    )

}

export default ItemDetail;