// import { useNavigate } from "react-router-dom"
// import img1 from "../images/img1.jpg"
// import img2 from "../images/img2.jpg"
// import img3 from "../images/img3.jpg"
// import img4 from "../images/img4.jpg"
// import Header from "./Header"
// import Footer from "./Footer"
// function Products() {

//     const navigate = useNavigate();
//     const handleAddToCart = () => {
//         const isLoggedIn = localStorage.getItem("isLoggedIn");
//         if (isLoggedIn=="true"){
//             navigate("/cart");
//         } else {
//             alert ("Please Login first!");
//             navigate("/login");
//         }
//     };
//     return(
//     <>
//         <Header/>
      
//              <div className="products">
        
//             <div className="product">
//                 <img src={img1} alt="product1"/>
//                 <h3>Skincare with glo</h3>
//                 <p>Rs.1000</p>
//                 <button onClick={handleAddToCart}>AddToCart</button>
//             </div>
                      
//             <div className="product">
//                 <img src={img2} alt="product2"/>
//                 <h3>Mamaearth Products</h3>
//                 <p>Rs.2000</p>
//                 <button onClick={handleAddToCart}>AddToCart</button>
//             </div>
//             <div className="product">
//                 <img src={img3} alt="product3"/>
//                 <h3>Dot&key Products</h3>
//                 <p>Rs.3000</p>
//                 <button onClick={handleAddToCart}>AddToCart</button>
//             </div>
//                <div className="product">
//                 <img src={img4} alt="product4"/>
//                 <h3>Ponds Products</h3>
//                 <p>Rs.1000</p>
//                 <button onClick={handleAddToCart}>AddToCart</button>
//             </div>
            
//         </div>
//     <Footer/>
      
//     </>
    
//   )
// }

// export default Products;