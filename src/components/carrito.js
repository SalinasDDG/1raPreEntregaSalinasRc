import { useContext } from "react";
import { CartContext } from "./cartContext";
import { Button } from "react-bootstrap";
import CartItem from "./cartItem";
import { Link } from "react-router-dom";


 const Carrito = () => {
    const {cart, clearCart, totalPrice} = useContext(CartContext)
    
    if(cart.length === 0){
        return(
            <div id="divCarrito">
                <p>¡Todavia no hay productos en el Carrito!</p>
                <Button variant="outline-warning"><Link className='btnAProductos' to= '/productos'> Ver nuestros productos </Link></Button>
            </div>
        )
    }else{

    return(
        <div id="contenedorCarrito" >
            <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            </div>
            <h3>Total: ${totalPrice()}</h3>
            <div>
            <Button onClick={() => clearCart()} variant="outline-danger" >Limpiar Carrito</Button></div>

            <div id="btnCheckout">
            <Button ><Link className='btnCheckout' to="/checkout">Finalizar compra</Link></Button>
            </div>
        </div>
    );
}
}

export default Carrito;