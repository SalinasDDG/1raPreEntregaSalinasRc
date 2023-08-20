import carr from "./media/carr.png"
import './style.css';
import { useContext } from "react";
import { CartContext } from "./cartContext";
import { Link } from "react-router-dom";


const CartWidget = () =>{
    const {totalQuantity} = useContext(CartContext) 


    return(

        <div>
            <Link to="/carrito" className="cardWidget" style={{display: totalQuantity() > 0 ? "block" : "none"}} >

                <img id="widget" src={carr} alt= "cart-widget"/>
                {totalQuantity()}
            </Link>

        </div>

    )
}

export default CartWidget;