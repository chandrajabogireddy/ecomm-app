import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!username || !password) {
      alert("All fields are required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(u => u.username === username);
    if (userExists) {
      alert("User already exists!");
      return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <>
      <Header />

      <div className="auth-container">
        <div className="auth-card">
          <h2>Signup</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSignup}>Signup</button>

          <p>
            Already a user? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;