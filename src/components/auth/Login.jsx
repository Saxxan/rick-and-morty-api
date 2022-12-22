import React, { useState } from "react";
import "./forms.css";

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../database/base";

// Bootstrap components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    function onRegister() {
      signInWithEmailAndPassword(auth, email, password).catch((error) =>
        console.log(error)
      );
    }
    onRegister();
  }

  return (
    <article className="form--container">
      <Form className="form--box" onSubmit={handleSubmit}>
        <h1 className="form--box__title">Log in</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="form__button" variant="primary" type="submit">
          Log in
        </Button>
      </Form>
      <aside className="form__aside">
        <h4>Or sign up with:</h4>
        <a href="#" className="fb btn rrss--btn">
          <i className="fa fa-facebook fa-fw"></i> Login with Facebook
        </a>
        <a href="#" className="twitter btn rrss--btn">
          <i className="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
        <a href="#" className="google btn rrss--btn">
          <i className="fa fa-google fa-fw"></i> Login with Google+
        </a>
      </aside>
    </article>
  );
}

export default Login;
