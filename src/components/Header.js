import React from "react";
import { appLogo } from "../utils/const";
import logo from "../utils/logo.png"

const Header = () => {
  return (
    <div className="absolute w-full h-[500px] bg-gradient-to-b from-black">
      <img
        className="absolute top-4 left-4 w-44 z-10"
        src={appLogo}
        alt="logo"
      />
    </div>
  );
};

export default Header;
