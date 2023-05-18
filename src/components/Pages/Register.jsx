import React, { useContext, useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [show, setShow] = useState(false);
  const { signUp, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.pathname || "/";
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    signUp(email, password)
      .then((result) => {
        const currentUser = result.user;
        updateProfile(currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            toast.success("Profile Updated Successfully");
            navigate(from, { replace: true });
            form.reset();
          })
          .catch(() => toast.error("Profile Update Failed"));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-8">
      <div className="hero-content lg:w-9/12 flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <Toaster />
        <div className="card flex-shrink-0 lg:w-1/2 shadow-2xl bg-base-100">
          <Form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
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
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? `text` : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <span
                className="absolute top-14 right-2"
                onClick={() => setShow(!show)}
              >
                <FaEye />
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info">Register</button>
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
              Already have an account?{" "}
              <Link to="/login" className="underline text-indigo-600 text-xl">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
