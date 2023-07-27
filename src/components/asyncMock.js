import destornillador from './media/destornilladores.jpg';
import pinzas from './media/pinzas.jpg';
import tester from './media/tester.jpg';
import tornilladora from './media/tornilladora.jpg';
import tornillos from './media/tornillos.jpg';
import tuercas from './media/tuercas.jpg';


const productos = [

    {id : "1",
     nombre : "Destornilladores",
     precio : 1000,
     stock : 30,
     categoria : "demano",
     imagen : destornillador,
    },

    {id : "2",
     nombre : "Pinzas",
     precio : 2000,
     stock : 30,
     categoria : "demano",
     imagen : pinzas,
    },

    {id : "3",
     nombre : "Tester",
     precio : 8000,
     stock : 10,
     categoria : "electrica",
     imagen : tester,
    },

    {id : "4",
     nombre : "Tornilladora Electrica",
     precio : 10000,
     stock : 10,
     categoria : "electrica",
     imagen : tornilladora,
    },

    {id : "5",
     nombre : "Tornillos",
     precio : 50,
     stock : 200,
     categoria : "insumos",
     imagen : tornillos,
    },

    {id : "6",
     nombre : "Tuercas",
     precio : 70,
     stock : 200,
     categoria : "insumos",
     imagen : tuercas,
    },

]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(() => resolve(productos))
    }, 500 )
}

export const getProductsById = (idProducto) => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(productos.find(prod => prod.id === idProducto))}, 500)
    })
}

export const getProductsByCategory = (categoriaId) => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(productos.filter(prod => prod.categoria === categoriaId))}, 500)
    })
}