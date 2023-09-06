import React from "react";
import { signInWithPopup } from "firebase/auth";
import { provider, auth } from "../firebase";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const SignInWithGoogle = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(
          login({
            email: result.user.email,
            uid: result.user.uid,
            displayName: result.user.displayName,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorCode);
        console.warn(errorMessage);
      });
  };
  return <GoogleButton onClick={handleGoogleLogin} className="self-center" />;
};

export default SignInWithGoogle;
