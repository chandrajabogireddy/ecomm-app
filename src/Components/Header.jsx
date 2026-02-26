import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const name = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("cart");
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header>
      <h1>🛍️ My Shop KL University</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin-login">Admin</Link>
        

        {isLoggedIn === "true" ? (
          <button onClick={handleLogout} className="btn">
            Logout
          </button>
        ) : (
          <button onClick={handleLogin} className="btn">
            Login
          </button>
        )}
      </nav>

      <div id="user-display">
        {isLoggedIn === "true"
          ? `Welcome, ${name}!`
          : "Welcome, Guest"}
      </div>
    </header>
  );
}

export default Header;