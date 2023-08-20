import { useState, useEffect } from "react";
//import { getProductsById } from "./asyncMock";
import ItemDetail from "./cardDetalleProd"
import { useParams } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";
import {db} from "./firebaseConfig"


const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)
    const [, setLoading] = useState(true)

    const {idProducto} = useParams();

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "Items", idProducto)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const ProdctAdapted = {id: response.id, ...data}
            setProductos(ProdctAdapted)
        })
        .catch(error => {console.log(error)})
        .finally(() => setLoading(false))

    }, [idProducto])


    return (
        <div>
         <ItemDetail {...productos}/>
        </div>
    )
}

export default ItemDetailContainer;