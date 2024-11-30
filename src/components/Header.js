import React, { useState } from "react";
import { appLogo, userIcon } from "../utils/const";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const [isSignOut, SetIsSignOut] = useState(false);
  const user = useSelector(store=>store.user)
  const navigate = useNavigate()
  const handelClick = () => {
    SetIsSignOut((prev) => !prev);
  };
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
      navigate("/")

      })
      .catch((error) => {
       navigate("/error")
      });
  };
  return (
    <div className="absolute w-full  bg-gradient-to-b from-black flex justify-between items-center px-4">
      <img className="top-4 left-4 w-44 z-10" src={appLogo} alt="logo" />
      <div className="relative flex items-center right-3">
        <img
          className="w-12 h-12 cursor-pointer"
          alt="userLogo"
          src={user?.photoURL}
          onClick={handelClick}
        />
        {isSignOut && (
          <button
            className="absolute top-16 right-0 bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg"
            onClick={handelSignOut}
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
