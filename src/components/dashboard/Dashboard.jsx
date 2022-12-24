import React, { useEffect, useState } from "react";
import "./dashboard.css";

// Firebase
import { auth } from "../../database/base";
import { signOut } from "firebase/auth";

// Bootstrap components
import Button from "react-bootstrap/Button";

// Components
import UserCard from "../user-card/UserCard";
import UserModal from "../userModal/UserModal";

function Dashboard(props) {
  const [users, setUsers] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const [showModal, setShowModal] = useState(false);

  /**
   * Effect hook to get the users from the Rick and Morty API
   * and creates randomly bank account data for this application
   */
  useEffect(() => {
    fetch(
      "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30"
    )
      .then((response) => response.json())
      .then((data) => {
        // setUsers(data);
        let tempUsers = data;
        tempUsers.forEach((user) => {
          user.bankAccount = Number((Math.random() * 5000).toFixed(2));
          user.loan = Number(
            (Math.random() * (0 - -5000 + 1) - 5000).toFixed(2)
          );
        });
        setUsers(tempUsers);
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
    setUsers();
  }

  /**
   * Function that handles click on user card to open user settings
   * @param {*} id
   */
  function handleClickOnUser(id) {
    let userSelected = users.filter((user) => user.id === id);
    setSelectedUser(userSelected[0]);
    setShowModal(true);
  }

  /**
   * Function to handle closing the modal
   */
  function closeUserSettings() {
    setSelectedUser();
    setShowModal(false);
  }

  function updateUsers(userId, property, value) {
    console.log(userId, property, value);
    let tempUsers = users;
    tempUsers.forEach((user) => {
      if (user.id === userId) {
        user[property] = value;
      }
    });
    setUsers(tempUsers);
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
          {/* List of users */}
          <article className="dashboard__users">
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                openUserSettings={() => handleClickOnUser(user.id)}
              />
            ))}
          </article>
          {/* Modal for the user settings */}
          <UserModal
            show={showModal}
            onHide={closeUserSettings}
            user={selectedUser ? selectedUser : ""}
            users={users ? users : ""}
            updateUsers={updateUsers}
            launchAlert={props.launchAlert}
          />
        </main>
      )}
    </main>
  );
}

export default Dashboard;
