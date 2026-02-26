import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    if (username === "Chandu" && password === "123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/Admin");
    } else {
      alert("Access Denied! Only Admin can login.");
    }
  };

  return (
    <>
      <Header />
      <div style={{ textAlign: "center", padding: "120px" }}>
        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="Admin Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button onClick={handleAdminLogin}>Login as Admin</button>
      </div>
      <Footer />
    </>
  );
}

export default AdminLogin;