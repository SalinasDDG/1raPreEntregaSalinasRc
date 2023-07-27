import { useState, useEffect } from "react";
import { getProductsById } from "./asyncMock";
import ItemDetail from "./cardDetalleProd"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)

    const {idProducto} = useParams();

    useEffect(() => {
        getProductsById(idProducto)
        .then(response => {
            setProductos(response)
        })
        .catch(error => {console.error(error);})
    }, [idProducto])

    return (
        <div>
         <ItemDetail {...productos}/>
        </div>
    )
}

export default ItemDetailContainer;