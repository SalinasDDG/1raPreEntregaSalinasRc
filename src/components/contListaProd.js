import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "./asyncMock";
import ItemList from "./listaProd"
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    console.log(productos)
    useEffect(() => {
        const asyncFunc = idCategoria ? getProductsByCategory : getProducts;

        asyncFunc(idCategoria)
        .then(response => {
            setProductos(response)
        })
        .catch(error => {console.error(error);})
    }, [idCategoria])

    return (
        <div>
            <ItemList producto={productos}/>
        </div>
    )
}

export default ItemListContainer;