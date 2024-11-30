import { useRef, useState } from "react";
import { appBackground } from "../utils/const";
import Header from "./Header";
import { checkValidation } from "../utils/validate";

const Login = () => {
  let [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const fullName = useRef(null);
  let [errorMessage, setErrorMessage] = useState(null);
  let [password, setPasswordd] = useState("");
  const handelSignUp = () => {
    setIsSignIn(!isSignIn);
  };
  const handelButtonClick = () => {
    const message = checkValidation(
      email.current.value,
      password,
      fullName.current?.value,
    );
    setErrorMessage(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img className="" src={appBackground} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-3/12 bg-black my-36 text-white mx-auto right-0 left-0 opacity-80 rounded-xl"
      >
        <h1 className="font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-xl"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone number"
          className="p-4 my-4 w-full bg-gray-800 rounded-xl"
        ></input>
        <input
          // ref={password}
          value={password}
          onChange={(e) => setPasswordd(e.target.value)}
          type="password"
          placeholder="Enter Your Password"
          className="p-4 my-4 w-full  bg-gray-800 rounded-xl"
        ></input>
        <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-xl"
          onClick={handelButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4  cursor-pointer" onClick={handelSignUp}>
          New To Netflix? Create account to Sign Up
        </p>
      </form>
    </div>
  );
};
export default Login;
