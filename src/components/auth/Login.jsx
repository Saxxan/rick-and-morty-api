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
    <Form className="form-box" onSubmit={handleSubmit}>
      <h1 className="form-box__title">Log in</h1>
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
      <Button variant="primary" type="submit">
        Log in
      </Button>
    </Form>
  );
}

export default Login;
