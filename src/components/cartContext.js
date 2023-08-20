import React, { useState } from "react";


export const CartContext = React.createContext({cart: []})


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, cantidad) => {
        if(!isInCart(item.id)) {
            setCart (prev => [...prev, {...item, cantidad}])
        }else{
            setCart([...cart, {...item, cantidad}])
        }
    } 

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.precio * act.cantidad, 0)
    }


    const totalQuantity = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0)

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {setCart([])}

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }


    return(

        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalPrice, totalQuantity }}>{children}</CartContext.Provider>

    )

}
