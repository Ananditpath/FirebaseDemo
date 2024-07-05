import "./LoginForm.css";
import React from "react";
import LockSVG from "../SVG/LockSVG";
import EmailSVG from "../SVG/EmailSVG";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Entered value does not match email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must have at least 6 characters")
        .max(16, "Password must have at most 16 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="login-react-form">
      <div className="form-input">
        <EmailSVG />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter Your Email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="text-red">{formik.errors.email}</p>
        ) : null}
      </div>
      <div className="form-input">
        <LockSVG />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter Your Password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="text-red">{formik.errors.password}</p>
        ) : null}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
