import React, { useState } from "react";
import "./buttons-box.css";

// Bootstrap components
import Button from "react-bootstrap/Button";
import Login from "./Login";
import Signup from "./Signup";

function InitialButtons() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  function handleLogInClick() {
    setIsLogin(true);
  }

  function handleSignUpClick() {
    setIsSignUp(true);
  }

  return (
    <>
      {!isLogin && !isSignUp && (
        <div className="buttons-box">
          <Button variant="primary" onClick={handleLogInClick}>
            Log in
          </Button>
          <Button variant="primary" onClick={handleSignUpClick}>
            Sign up
          </Button>
        </div>
      )}
      {isLogin && !isSignUp && <Login />}
      {!isLogin && isSignUp && <Signup />}
    </>
  );
}

export default InitialButtons;
