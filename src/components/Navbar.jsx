import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full absolute flex items-center justify-between p-4 z-[100]">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white py-2 px-6 rounded cursor-pointer pr-4">Account</button>
          </Link>

          <Link onClick={handleLogout}>
            <button className="bg-red-600 text-white py-2 px-6 rounded cursor-pointer">Logout</button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white py-2 px-6 rounded cursor-pointer pr-4">Sign In</button>
          </Link>

          <Link to="/signup">
            <button className="bg-red-600 text-white py-2 px-6 rounded cursor-pointer">Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
