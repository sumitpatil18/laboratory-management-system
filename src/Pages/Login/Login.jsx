import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "") {
      alert("Please Select Login Type");
      return;
    }

    // Admin Login

    if (role === "admin" && username === "admin" && password === "admin123") {
      navigate("/admin/managelaboratory");
    }

    // Laboratory User Login
    else if (
      role === "laboratory" &&
      username === "labuser" &&
      password === "lab123"
    ) {
      navigate("/laboratory/dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="login-page">
      <div className="main-container">
        <div className="left-section">
          <div className="content-box">
            <h1 className="main-heading">
              Blood Laboratory <br />
              Management System
            </h1>

            <p className="description">
              Smart and Secure Laboratory Management Platform for Admin and
              Laboratory Users.
            </p>

            <img
              className="blood-image"
              src="https://cdn-icons-png.flaticon.com/512/2966/2966485.png"
              alt="Blood Laboratory"
            />
          </div>
        </div>

        <div className="right-section">
          <div className="login-card">
            <h2 className="login-title">Welcome Back</h2>

            <p className="login-subtitle">Please login to continue</p>

            <form className="login-form" onSubmit={handleSubmit}>
              {/* Role Selection */}

              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    onChange={(e) => setRole(e.target.value)}
                  />

                  <span>Admin Login</span>
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="role"
                    value="laboratory"
                    onChange={(e) => setRole(e.target.value)}
                  />

                  <span>Laboratory User</span>
                </label>
              </div>

              {/* Username */}

              <div className="input-group">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              {/* Password */}

              <div className="input-group">
                <input
                  type="password"
                  className="input-field"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="forgot-password">
                <a href="/">Forgot Password?</a>
              </div>

              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
