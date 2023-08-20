import { useState, useEffect } from "react";
//import { getProducts, getProductsByCategory } from "./asyncMock";
import ItemList from "./listaProd"
import { useParams } from "react-router-dom";

import {getDocs, collection, query, where} from "firebase/firestore"
import {db} from "./firebaseConfig"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [, setLoading] = useState(true)

    const {idCategoria} = useParams();

    useEffect(() => {
        setLoading(true)

        const collectionRef = idCategoria
            ? query(collection(db, "Items"), where("categoria", "==", idCategoria))
            : collection(db, "Items")

        getDocs(collectionRef)
        .then(response => {
            const prodctAdapted = response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProductos(prodctAdapted)
        })
        .catch(error => {console.log(error)})
        .finally(() => {setLoading(false)})

    }, [idCategoria])

//    if(!loading){return <div>Cargando... </div>;}

    return (
        <div>
            <ItemList producto={productos}/>
        </div>
    )
}

export default ItemListContainer;


