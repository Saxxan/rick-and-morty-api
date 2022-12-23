import React, { useEffect, useState } from "react";
import "./dashboard.css";

// Firebase
import { auth } from "../../database/base";
import { signOut } from "firebase/auth";

// Bootstrap components
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";

// Components
import UserCard from "../user-card/UserCard";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();

  /**
   * Effect hook to get the users from the Rick and Morty API
   */
  useEffect(() => {
    fetch(
      "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30"
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
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

  /**
   * Function that handles click on user card to open user settings
   * @param {*} id
   */
  function handleClickOnUser(id) {
    let userSelected = users.filter((user) => user.id === id);
    setSelectedUser(userSelected[0]);
  }

  function closeUserSettings() {
    setSelectedUser();
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
        <main className="dashboard__body">
          <article className="dashboard__users">
            {users.map((user) => (
              <UserCard
                key={user.id}
                img={user.image}
                name={user.name}
                gender={user.gender}
                specie={user.species}
                openUserSettings={() => handleClickOnUser(user.id)}
              />
            ))}
          </article>
          {selectedUser && (
            <article className="dashboard__users--info">
              <CloseButton onClick={closeUserSettings} />
              <h2>{selectedUser.name}</h2>
            </article>
          )}
        </main>
      )}
    </main>
  );
}

export default Dashboard;
