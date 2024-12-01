import { useRef, useState } from "react";
import { appBackground } from "../utils/const";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { userIcon } from "../utils/const";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch =useDispatch()
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
      fullName.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      //Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current?.value,
            photoURL: userIcon,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  dsiplayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {});
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Signed In
      signInWithEmailAndPassword(auth, email.current.value, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="relative min-h-screen">
      <Header />


      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={appBackground}
          alt="Background"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-8 sm:p-10 md:p-12 w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12 text-white rounded-xl shadow-lg"
      >
        <h1 className="font-bold text-2xl sm:text-3xl mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-3 sm:p-4 mb-4 w-full bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or Phone number"
          className="p-3 sm:p-4 mb-4 w-full bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <input
          value={password}
          onChange={(e) => setPasswordd(e.target.value)}
          type="password"
          placeholder="Enter Your Password"
          className="p-3 sm:p-4 mb-4 w-full bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <p className="text-red-600 font-bold text-sm sm:text-lg py-2">
          {errorMessage}
        </p>


        <button
          className="p-3 sm:p-4 my-4 bg-red-700 w-full rounded-xl font-semibold hover:bg-red-600 transition-all"
          onClick={handelButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-center text-sm sm:text-base cursor-pointer hover:underline"
          onClick={handelSignUp}
        >
          New to Netflix? Create an account to Sign Up
        </p>
      </form>
    </div>
  );
};
export default Login;
