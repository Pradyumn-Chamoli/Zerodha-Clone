import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState("");

  const handleSignup = async () => {
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/register`,
        { name, email, password }
      );

      alert("Signup successful! Please login.");
      window.location.href = "/login";

    } catch (err) {
      setError(err.response?.data?.msg || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "20px"
    }}>
      <div style={{
        background: "white",
        borderRadius: "20px",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
        padding: "40px",
        width: "100%",
        maxWidth: "420px"
      }}>
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "700", color: "#2d3748" }}>
            Create Account
          </h1>
          <p style={{ fontSize: "14px", color: "#718096" }}>
            Join us today and get started
          </p>
        </div>

        {error && (
          <div style={{
            backgroundColor: "#fed7d7",
            color: "#c53030",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "13px",
            marginBottom: "15px"
          }}>
            ⚠️ {error}
          </div>
        )}

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "10px", border: "2px solid #e2e8f0" }}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "10px", border: "2px solid #e2e8f0" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "10px", border: "2px solid #e2e8f0" }}
        />

        <button
          onClick={handleSignup}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            fontSize: "16px",
            fontWeight: "600",
            color: "white",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#667eea", textDecoration: "none", fontWeight: "600" }}>
            Sign In
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SignUp;