import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Components/Home";
import "./Components/Styles.css"
import Login from "./Components/Login";
import Cart from "./Components/Cart";
// import Product from "./components/Product";
import Products1 from "./Components/Products1";
import Signup from "./Components/Signup";
import Admin from "./Components/Admin";
import AdminLogin from "./Components/AdminLogin";




function App(){
  return(
    <>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
   
   {/* < Route path="/products" element={<Products /> } />*/  }
       <Route path="/cart" element={<Cart />} />
       <Route path="/login" element={<Login />} />
       <Route path="/products" element={<Products1 />} />
       <Route path="/signup" element={< Signup />} />
       <Route path="/Admin" element={<Admin />} />
       <Route path="/admin-login" element={<AdminLogin />} />
      
    </Routes>
    </HashRouter>
    </>
  )
}
export default App