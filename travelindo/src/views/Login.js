// src/components/Login.js
import React from "react";
import "../css/Login.css";
import images from "../services/ImageLoader";
import useAuth from "../services/useAuth"; // Import custom hook

function Login() {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    showSignup,
    setShowSignup,
    handleSignUp,
    handleLogin,
  } = useAuth(); // Mengambil state dan fungsi dari custom hook

  return (
    <div className="login-page">
      <img
        className="img-container"
        src={images["image4.jpeg"]}
        style={{ width: "50%", height: "100%" }}
        alt="Login Background"
      />
      <div className="container1">
        {!showSignup ? (
          <div className="login-container" id="login-container">
            <img
              src={images["Logo_ApoTech.png"]}
              style={{
                height: "40px",
                width: "200px",
                display: "block",
                margin: "auto",
              }}
              alt="ApoTech Logo"
            />
            <h1 style={{ textAlign: "center", color: "#07837b" }}>Welcome!</h1>
            <h4 style={{ textAlign: "center", color: "#475353" }}>
              Silahkan Login untuk melanjutkan
            </h4>
            <form id="loginForm" onSubmit={handleLogin}>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button id="loginButton" type="submit" disabled={loading}>
                {loading ? "Loading..." : "Login"}
              </button>
              {error && (
                <p style={{ color: "red", textAlign: "center" }}>{error}</p>
              )}
            </form>
            <p style={{ textAlign: "center" }}>
              Belum punya akun?{" "}
              <a href="#" onClick={() => setShowSignup(true)}>
                SignUp
              </a>
            </p>
          </div>
        ) : (
          <div className="signup-container" id="signup-container">
            <img
              src={images["Logo_ApoTech.png"]}
              style={{
                height: "40px",
                width: "200px",
                display: "block",
                margin: "auto",
              }}
              alt="ApoTech Logo"
            />
            <h1 style={{ textAlign: "center", color: "#07837b" }}>Sign Up</h1>
            <h4 style={{ textAlign: "center", color: "#475353" }}>
              Buat akun untuk memulai
            </h4>
            <form id="signinForm" onSubmit={handleSignUp}>
              <div className="input-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  name="retype_password"
                  placeholder="Ulangi Password"
                  required
                />
              </div>
              <div className="button-group">
                <button type="submit" disabled={loading}>
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
              {error && (
                <p style={{ color: "red", textAlign: "center" }}>{error}</p>
              )}
            </form>
            <p style={{ textAlign: "center" }}>
              Sudah punya akun?{" "}
              <a href="#" onClick={() => setShowSignup(false)}>
                Login
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
