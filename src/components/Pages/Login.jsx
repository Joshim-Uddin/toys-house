import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Login = () => {
  const { logIn, googleSignIn, resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const from = location?.state?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      setEmailError("Email is required");
      return;
    } else if (password.length === 0) {
      setPasswordError("Password is required");
      return;
    } else {
      logIn(email, password)
        .then((result) => {
          const currentUser = result.user;
          navigate(from, { replace: true });
        })
        .catch((err) => setError("Email and password doesn't match"));
    }
    setEmail("");
    setPassword("");
  };

  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailInput
      )
    ) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };
  const handlePasswordChange = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleGoogleSingIn = () => {
    googleSignIn()
      .then((result) => {
        const currentUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const handleForgot = (email) => {
    resetPassword(email)
      .then(() => console.log("Password reset email sent"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen bg-base-200 py-8">
      <div className="hero-content lg:w-9/12 flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 lg:w-1/2 shadow-2xl bg-base-100">
          <Form onSubmit={handleLogin} className="card-body">
            {error && (
              <div>
                <p className="text-red-400">{error}</p>
              </div>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={handleEmailChange}
                placeholder="email"
                className="input input-bordered"
              />
              {emailError && <span className="text-red-400">{emailError}</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                onChange={handlePasswordChange}
                placeholder="password"
                className="input input-bordered"
              />
              {passwordError && (
                <span className="text-red-400">{passwordError}</span>
              )}
            </div>
            <div className="flex w-full items-center justify-between gap-5">
              <p className="cursor-pointer" onClick={handleForgot}>
                Forgot Password
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info">Login</button>
            </div>
          </Form>
          <div className="divider w-11/12 mx-auto">OR</div>
          <div className="w-11/12 mx-auto px-2 my-4">
            <button
              onClick={handleGoogleSingIn}
              className="btn custom w-full flex items-center gap-5 normal-case"
            >
              <FaGoogle /> Login With Google
            </button>
          </div>
          <div className="my-3 text-left ps-4">
            <p>
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                state={location.state}
                className="underline text-indigo-600 text-xl"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
