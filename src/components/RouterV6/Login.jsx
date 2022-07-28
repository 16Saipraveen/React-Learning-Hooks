import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("login", true);
  };
  useEffect(() => {
    let loginCondition = localStorage.getItem("login");
    if (!loginCondition) {
      navigate("/login");
    }
  });
  return (
    <div>
      Login
      <input type="text" placeholder="Username" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
