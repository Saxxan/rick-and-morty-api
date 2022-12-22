import React, { useEffect, useState } from "react";
import "./dashboard.css";

// Firebase
import { auth } from "../../database/base";
import { signOut } from "firebase/auth";

// Bootstrap components
import Button from "react-bootstrap/Button";

// Components
import UserCard from "../user-card/UserCard";

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  /**
   * Handle log out
   */
  function handleLogOut() {
    signOut(auth);
  }

  return (
    <main className="dashboard">
      <header className="dashboard__header">
        <h1>Dashboard</h1>
        <Button variant="danger" className="btn--logout" onClick={handleLogOut}>
          Log out
        </Button>
      </header>
      {users && (
        <article className="dashboard__main">
          {users.map((user) => (
            <UserCard
              key={user.id}
              img={user.image}
              name={user.name}
              gender={user.gender}
              specie={user.species}
            />
          ))}
        </article>
      )}
    </main>
  );
}

export default Dashboard;
