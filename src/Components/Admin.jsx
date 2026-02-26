import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function Admin() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      alert("Access Denied!");
      navigate("/");
      return;
    }

    axios.get("https://dummyjson.com/products")
      .then(res => {
        setProducts(res.data.products);
      });
  }, []);

  const handleSelect = (product) => {
    const alreadySelected = selectedProducts.find(p => p.id === product.id);

    if (alreadySelected) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleSave = () => {
    localStorage.setItem("approvedProducts", JSON.stringify(selectedProducts));
    alert("Selected products saved successfully!");
  };

  return (
    
    <>
  <Header />

  <div className="admin-container">
    <h2 className="admin-title">Admin Panel</h2>

    <section className="admin-products">
      {products.map((p) => {
        const isSelected = selectedProducts.find(sp => sp.id === p.id);

        return (
          <div
            className={`admin-product-card ${isSelected ? "selected" : ""}`}
            key={p.id}
            onClick={() => handleSelect(p)}
          >
            <img src={p.thumbnail} alt={p.title} />
            <h3>{p.title}</h3>
            <p>Price: ${p.price}</p>

            <button className="select-btn">
              {isSelected ? "✔ Selected" : "Select"}
            </button>
          </div>
        );
      })}
    </section>

    {/* Centered Save Button */}
    <div className="save-container">
      <button className="save-btn" onClick={handleSave}>
        Save Selected Products ({selectedProducts.length})
      </button>
    </div>
  </div>

  <Footer />
</>
  );
}

export default Admin;