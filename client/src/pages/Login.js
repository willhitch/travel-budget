import React from "react";
import LoginCard from "../components/LoginCard";
import CreateAccountBtn from "../components/CreateAccountBtn";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      {" "}
      <div className="section"></div>
      <main>
        <center className="login-div">
          <div className="section"></div>
          <h5 className="login-header">Please, login into your account</h5>
          <div className="section"></div>
          <LoginCard></LoginCard>
          <CreateAccountBtn></CreateAccountBtn>
        </center>
      </main>
    </div>
  );
};

export default Login;