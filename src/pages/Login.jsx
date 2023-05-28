import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img className="hidden sm:block absolute w-full h-full object-cover" src="https://cdn.shopify.com/s/files/1/0607/5056/1539/articles/netflix.jpg?v=1669877376" alt="/" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[450px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error ? <p className="p-3 bg-red-300 my-3">{error}</p> : null}
              <form action="" onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                <input type="email" placeholder="Email" autoComplete="email" className="p-3 my-2 bg-gray-700 rounded" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" autoComplete="current-password" className="p-3 my-2 bg-gray-700 rounded" onChange={(e) => setPassword(e.target.value)} />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign In</button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-4">
                  <span className="text-gray-600">New to Netflix?</span>
                  <Link to="/signup"> Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
