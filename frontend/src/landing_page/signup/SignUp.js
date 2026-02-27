import React, { useState } from "react";
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
      marginBottom: "10px",
      fontFamily: "'Poppins', sans-serif"
    },
    subtitle: {
      fontSize: "14px",
      color: "#718096",
      fontFamily: "'Inter', sans-serif"
    },
    inputGroup: {
      marginBottom: "20px",
      position: "relative"
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "13px",
      fontWeight: "500",
      color: "#4a5568",
      fontFamily: "'Inter', sans-serif"
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      fontSize: "15px",
      border: focusedField === "name" ? "2px solid #667eea" : "2px solid #e2e8f0",
      borderRadius: "10px",
      outline: "none",
      transition: "all 0.3s ease",
      fontFamily: "'Inter', sans-serif",
      backgroundColor: "#fafafa"
    },
    inputEmail: {
      width: "100%",
      padding: "12px 16px",
      fontSize: "15px",
      border: focusedField === "email" ? "2px solid #667eea" : "2px solid #e2e8f0",
      borderRadius: "10px",
      outline: "none",
      transition: "all 0.3s ease",
      fontFamily: "'Inter', sans-serif",
      backgroundColor: "#fafafa"
    },
    inputPassword: {
      width: "100%",
      padding: "12px 16px",
      fontSize: "15px",
      border: focusedField === "password" ? "2px solid #667eea" : "2px solid #e2e8f0",
      borderRadius: "10px",
      outline: "none",
      transition: "all 0.3s ease",
      fontFamily: "'Inter', sans-serif",
      backgroundColor: "#fafafa"
    },
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
      fontFamily: "'Inter', sans-serif",
      boxShadow: loading ? "none" : "0 4px 15px rgba(102, 126, 234, 0.3)",
      transform: loading ? "scale(1)" : "scale(1)",
    },
    buttonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)"
    },
    errorMessage: {
      backgroundColor: "#fed7d7",
      color: "#c53030",
      padding: "10px",
      borderRadius: "8px",
      fontSize: "13px",
      marginBottom: "15px",
      fontFamily: "'Inter', sans-serif",
      animation: "shake 0.3s ease-in-out"
    },
    divider: {
      display: "flex",
      alignItems: "center",
      margin: "25px 0",
      color: "#a0aec0",
      fontSize: "13px",
      fontFamily: "'Inter', sans-serif"
    },
    dividerLine: {
      flex: 1,
      height: "1px",
      backgroundColor: "#e2e8f0"
    },
    dividerText: {
      padding: "0 15px"
    },
    loginLink: {
      textAlign: "center",
      marginTop: "20px",
      fontSize: "14px",
      color: "#718096",
      fontFamily: "'Inter', sans-serif"
    },
    link: {
      color: "#667eea",
      textDecoration: "none",
      fontWeight: "600",
      cursor: "pointer"
    }
  };

  // Add this CSS for animations
  const animationStyles = `
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
    
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Inter:wght@400;500;600&display=swap');
  `;

  return (
    <>
      <style>{animationStyles}</style>
      <div style={styles.container}>
        <div style={styles.formCard}>
          <div style={styles.header}>
            <h1 style={styles.title}>Create Account</h1>
            <p style={styles.subtitle}>Join us today and get started</p>
          </div>

          {error && (
            <div style={styles.errorMessage}>
              ⚠️ {error}
            </div>
          )}

          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField("")}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField("")}
              style={styles.inputEmail}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusedField("password")}
              onBlur={() => setFocusedField("")}
              style={styles.inputPassword}
            />
          </div>

          <button 
            onClick={handleSignup} 
            disabled={loading} 
            style={styles.button}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.4)";
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.3)";
              }
            }}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          <div style={styles.divider}>
            <div style={styles.dividerLine}></div>
            <span style={styles.dividerText}>OR</span>
            <div style={styles.dividerLine}></div>
          </div>

          <div style={styles.loginLink}>
            Already have an account? {" "}
            <a href="/login" style={styles.link}>
              Sign In
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
