import "./Login.css";
import React from "react";
import AutumnSVG from "../SVG/AutumnSVG";
import GoogleSVG from "../SVG/GoogleSVG";
import LoginForm from "../LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-from">
      <div className="login-froml">
        <AutumnSVG />
      </div>
      <div className="login-fromr">
        <div className="form-header">
          <p>Login Account</p>
        </div>
        <div className="form">
          <LoginForm />
        </div>
        <div className="form-footer">
          <p className="text-legend">- OR -</p>
          <div className="social-icons">
            <span className="social-icon">
              <GoogleSVG />
            </span>
          </div>
          <p className="text-footer">
            Don't have an account?{" "}
            <span className="text-olive" onClick={() => navigate("/signup")}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
