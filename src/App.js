import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBarPrincipal from "./components/navbar"
import Carrito from "./components/carrito"
import ProductoHome from "./components/home"
import Error from "./components/error"
import ItemListContainer from "./components/contListaProd"
import ItemDetailContainer from "./components/contDetalleProd"
import {CartProvider} from "./components/cartContext"
import Checkout from "./components/generarOrder"


function App(){

  return(
 <BrowserRouter>

  <CartProvider>
  <NavBarPrincipal/>
      <Routes>
        <Route exact path="/" element={<ProductoHome/>}/>
        <Route exact path="/home" element={<ProductoHome/>}/>
        <Route exact path="/carrito" element={<Carrito/>}/>
        <Route exact path="/productos" element={<ItemListContainer/>}/>
        <Route exact path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
        <Route exact path="/producto/:idProducto" element={<ItemDetailContainer/>}/>
        <Route exact path="/checkout" element={<Checkout/>}/>
        <Route exact path="/*" element={<Error/>}/>

      </Routes>
      </CartProvider>

    </BrowserRouter>
  );
}

export default App;