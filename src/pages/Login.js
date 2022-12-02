// Webpage of the login page

// Import functions, docs, and packages
import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Initialize login page
function Login({setIsAuth}){
  let navigate = useNavigate();
  
  // Google sign in function
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth",true);
      setIsAuth(true);
      navigate("/");
    });
  };

  // Initialize login in page UI
  return (
    <div className="loginPage">
      <p>
        Welcome!
        <br></br>Sign In with Google Account
        </p>
      <button className="login-in-with-google-butn" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default Login;