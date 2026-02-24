import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./Components/Signup";
import Products1 from "./Components/Products1";
import Admin from "./Components/Admin";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>


        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products" element={<Products1/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App;