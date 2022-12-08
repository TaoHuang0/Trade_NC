// Import functions, docs, and packages
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import logo from './tradeNC.jpeg';

// Initiate the webpage
// Using isAuth to determine the user status 
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/App/login";
    });
  };

  //Generate UI using react-router-dom
  return (
    <Router>
      <nav>
        <div>
          <img className="tradeNCLogo" src={logo} alt="tradenc" />
        </div>
        <Link className="wlogin" to="/App"> Home </Link>
        {!isAuth ? (
          <Link className="wlogin" to="/App/login"> Login </Link>
        ) : (
          <>
            <Link className="wlogin" to="/App/createpost"> Sell My Item </Link>
            <button className="logout" onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/App" />} />
        <Route path="/App" element={<Home isAuth={isAuth} />} />
        <Route path="/App/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/App/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
