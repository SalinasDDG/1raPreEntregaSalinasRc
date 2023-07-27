import Item from "./cardProducto"

const ItemList = ({producto}) => {
    return(
        <div>
            {producto.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList;