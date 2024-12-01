import React, { useEffect, useState } from "react";
import { appLogo, userIcon } from "../utils/const";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeuser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const [isSignOut, SetIsSignOut] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handelClick = () => {
    SetIsSignOut((prev) => !prev);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            dsiplayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black to-transparent flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 z-50">
      <img className="w-32 sm:w-40 md:w-44" src={appLogo} alt="logo" />
      <div className="relative flex items-center">
        <img
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm cursor-pointer"
          alt="userLogo"
          src={userIcon}
          onClick={handelClick}
        />
        {isSignOut && (
          <button
            className="absolute top-14 right-0 bg-red-700 text-white text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-lg"
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
