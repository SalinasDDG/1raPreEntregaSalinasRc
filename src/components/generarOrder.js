 

import { useContext, useState } from "react"
import {db} from "./firebaseConfig"
import CheckoutForm from "./generarFormulario"
import { CartContext } from "./cartContext"
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"

 const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")

    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({nombre, telefono, email}) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {nombre, telefono, email},
                items: cart, total: total, date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, "Items")

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))

            const {docs} = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQueantity = productAddedToCart?.quantity

                if(stockDb >= prodQueantity) {batch.update(doc.ref, {stock: stockDb - prodQueantity})}
                else{outOfStock.push({id: doc.id, ...dataDoc})}
            });

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, "orders")

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }else{console.error("hay productos que estan fuera de stock")}
        }catch (error) {console.log(error)
        }finally { setLoading(false)}
    }


    if(loading){return <h2>Se esta generando su orden...</h2>}

    if(orderId){return <h2>El ID de su orden es: {orderId}</h2>}
    
    return(
        <div>
            <h4>CheckOut</h4>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
 }


 export default Checkout;