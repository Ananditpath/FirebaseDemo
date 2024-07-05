import "./Signup.css";
import React from "react";
import LeafSVG from "../SVG/LeafSVG";
import AutumnSVG from "../SVG/AutumnSVG";
import GoogleSVG from "../SVG/GoogleSVG";
import SignupForm from "../SignupForm/SignupForm";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="signup-from">
      <div className="signup-froml">
        <AutumnSVG />
      </div>
      <div className="signup-fromr">
        <div className="form-header">
          <p>Create Account</p>
        </div>
        <div className="form">
          <SignupForm />
        </div>
        <div className="form-footer">
          <p className="text-legend">- OR -</p>
          <div className="social-icons">
            <span className="social-icon">
              <GoogleSVG />
            </span>
          </div>
          <p className="text-footer">
            Already have an account?{" "}
            <span className="text-olive" onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
