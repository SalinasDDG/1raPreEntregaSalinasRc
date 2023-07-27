import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css";
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, stock, categoria, imagen}) => {
    return (
        <div id="containerCard">
            <div className=''>
        <Card className='text-center' id="cardCU" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} alt={nombre}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                Precio ${precio}
                </Card.Text>
                <Button variant="dark">
                    <Link id='botonLynk' to={`/producto/${id}`} >Ver detalle</Link>
                </Button>
            </Card.Body>
        </Card>
        </div>
    </div>

    )

}

export default Item;