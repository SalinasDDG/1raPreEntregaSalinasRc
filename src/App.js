import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBarPrincipal from "./components/navbar"
import Carrito from "./components/carrito"
import ProductoHome from "./components/home"
import Error from "./components/error"
import ItemListContainer from "./components/contListaProd"
import ItemDetailContainer from "./components/contDetalleProd"

function App(){
  return(
 <BrowserRouter>
  <NavBarPrincipal/>
      <Routes>
        <Route exact path="/" element={<ProductoHome/>}/>
        <Route exact path="/home" element={<ProductoHome/>}/>
        <Route exact path="/carrito" element={<Carrito/>}/>
        <Route exact path="/productos" element={<ItemListContainer/>}/>
        <Route exact path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
        <Route exact path="/producto/:idProducto" element={<ItemDetailContainer/>}/>
        <Route exact path="/*" element={<Error/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;