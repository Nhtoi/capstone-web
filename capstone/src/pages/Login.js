import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isNewUser ? "/signup" : "/login";
    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message); 
      } else {
        alert(`Error: ${data.error}`); 
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-light">
              <h3 className="text-center">{isNewUser ? "Create Account" : "Login to SCAM SCAM"}</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary">
                    {isNewUser ? "Sign Up" : "Login"}
                  </button>
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => setIsNewUser(!isNewUser)}
                  >
                    {isNewUser ? "Already have an account? Login" : "New user? Create account"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center mt-3">
            <a href="/" className="btn btn-outline-secondary">Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;