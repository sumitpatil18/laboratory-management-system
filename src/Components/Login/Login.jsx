import React from "react";
import "./Login.css";
function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Button Clicked");
  };

  return (
    <div className="main-container">
      {/* Left Section */}
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

      {/* Right Section */}
      <div className="right-section">
        <div className="login-card">
          <h2 className="login-title">Welcome Back</h2>

          <p className="login-subtitle">Please login to continue</p>

          <form className="login-form" onSubmit={handleSubmit}>
            {/* Radio Buttons */}
            <div className="radio-group">
              <label className="radio-option">
                <input type="radio" name="role" value="admin" />
                <span>Admin Login</span>
              </label>

              <label className="radio-option">
                <input type="radio" name="role" value="laboratory" />
                <span>Laboratory User</span>
              </label>
            </div>

            {/* Username */}
            <div className="input-group">
              <input
                type="text"
                className="input-field"
                placeholder="Enter Username"
                required
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <input
                type="password"
                className="input-field"
                placeholder="Enter Password"
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="forgot-password">
              <a href="/">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
