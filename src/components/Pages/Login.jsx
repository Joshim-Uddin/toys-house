import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Login = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        const currentUser = result.user;
        navigate(from, { replace: true });
        form.reset();
      })
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info">Login</button>
            </div>
          </Form>
          <div className="divider w-11/12 mx-auto">OR</div>
          <div className="w-11/12 mx-auto px-2 my-4">
            <button
              onClick={googleSignIn}
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
