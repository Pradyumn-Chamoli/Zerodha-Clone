import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenFromUrl = params.get("token");
    const nameFromUrl = params.get("name");

    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);
      localStorage.setItem("username", nameFromUrl || "");
      window.history.replaceState({}, document.title, "/");
      setHasToken(true);
      return;
    }

    const token = localStorage.getItem("token");
    if (token) {
      setHasToken(true);
    } else {
      window.location.href = process.env.REACT_APP_FRONTEND_URL + "/login";
    }
  }, []);

  if (!hasToken) return <p>Redirecting to login...</p>;

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;