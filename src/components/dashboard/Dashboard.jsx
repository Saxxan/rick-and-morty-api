import React from "react";

// Firebase
import { auth } from "../../database/base";
import { signOut } from "firebase/auth";

// Bootstrap components
import Button from "react-bootstrap/Button";

function Dashboard() {
  function handleLogOut() {
    signOut(auth);
  }

  return (
    <>
      <h1>Dashboard</h1>
      <Button variant="primary" onClick={handleLogOut}>
        Log out
      </Button>
    </>
  );
}

export default Dashboard;
