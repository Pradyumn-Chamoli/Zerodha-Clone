import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,
        { email, password }
      );

      window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}?token=${res.data.token}&name=${encodeURIComponent(res.data.name)}`;
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed. Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "20px"
    },
    formCard: {
      background: "white",
      borderRadius: "20px",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
      padding: "40px",
      width: "100%",
      maxWidth: "420px",
      animation: "slideUp 0.4s ease-out"
    },
    header: {
      textAlign: "center",
      marginBottom: "35px"
    },
    title: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#2d3748",
      marginBottom: "10px"
    },
    subtitle: {
      fontSize: "14px",
      color: "#718096"
    },
    inputGroup: {
      marginBottom: "20px"
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "13px",
      fontWeight: "500",
      color: "#4a5568"
    },
    input: (field) => ({
      width: "100%",
      padding: "12px 16px",
      fontSize: "15px",
      border: focusedField === field ? "2px solid #667eea" : "2px solid #e2e8f0",
      borderRadius: "10px",
      outline: "none",
      transition: "all 0.3s ease",
      backgroundColor: "#fafafa"
    }),
    button: {
      width: "100%",
      padding: "14px",
      fontSize: "16px",
      fontWeight: "600",
      color: "white",
      background: loading ? "#cbd5e0" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      border: "none",
      borderRadius: "10px",
      cursor: loading ? "not-allowed" : "pointer",
      transition: "all 0.3s ease",
      marginTop: "25px",
      boxShadow: loading ? "none" : "0 4px 15px rgba(102, 126, 234, 0.3)"
    },
    errorMessage: {
      backgroundColor: "#fed7d7",
      color: "#c53030",
      padding: "10px",
      borderRadius: "8px",
      fontSize: "13px",
      marginBottom: "15px"
    },
    divider: {
      display: "flex",
      alignItems: "center",
      margin: "25px 0",
      color: "#a0aec0",
      fontSize: "13px"
    },
    dividerLine: {
      flex: 1,
      height: "1px",
      backgroundColor: "#e2e8f0"
    },
    dividerText: {
      padding: "0 15px"
    },
    signupLink: {
      textAlign: "center",
      marginTop: "20px",
      fontSize: "14px",
      color: "#718096"
    },
    link: {
      color: "#667eea",
      textDecoration: "none",
      fontWeight: "600",
      cursor: "pointer"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <div style={styles.header}>
          <h1 style={styles.title}>Welcome Back</h1>
          <p style={styles.subtitle}>Login to continue trading</p>
        </div>

        {error && <div style={styles.errorMessage}>⚠️ {error}</div>}

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField("")}
            style={styles.input("email")}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setFocusedField("password")}
            onBlur={() => setFocusedField("")}
            style={styles.input("password")}
          />
        </div>

        <button onClick={handleLogin} disabled={loading} style={styles.button}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <div style={styles.divider}>
          <div style={styles.dividerLine}></div>
          <span style={styles.dividerText}>OR</span>
          <div style={styles.dividerLine}></div>
        </div>

        <div style={styles.signupLink}>
          Don’t have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;