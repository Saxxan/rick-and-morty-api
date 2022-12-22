import React, { useState } from "react";
import "./forms.css";

// Firebase
import { auth, db } from "../../database/base";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";

// Bootstrap components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    function onRegister() {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          set(ref(db, "users/" + userCredential.user.uid), {
            firstName: firstName,
            lastName: lastName,
            email: email,
          });
        })
        .catch((error) => console.log(error));
    }
    onRegister();
  }

  return (
    <article className="form--container">
      <Form className="form--box" onSubmit={handleSubmit}>
        <h1 className="form--box__title">Sign up</h1>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            placeholder="Enter first name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            placeholder="Enter last name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button className="form__button" variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
      <aside className="form__aside">
        <h4>Or sign up with:</h4>
        <a href="#" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Login with Facebook
        </a>
        <a href="#" class="twitter btn">
          <i class="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
        <a href="#" class="google btn">
          <i class="fa fa-google fa-fw"></i> Login with Google+
        </a>
      </aside>
    </article>
  );
}

export default Signup;
