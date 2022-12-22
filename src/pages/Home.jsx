import React, { useState, useContext, useEffect } from "react";
import "./home.css";

// Firebase
import { auth, db } from "../database/base";
import { signOut } from "firebase/auth";
import { AuthContext } from "../authentication/AuthProvider";
import { ref, onValue } from "firebase/database";

// Components
import Login from "../components/auth/Login";
import Dashboard from "../components/dashboard/Dashboard";
import InitialButtons from "../components/auth/InitialButtons";

function Home() {
  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");

  useEffect(() => {
    console.log(currentUser);
    if (currentUser) {
      const starCountRef = ref(db, "users/" + currentUser.uid);
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          var data = snapshot.val();
          console.log(data);
          setUsername(data.firstName + " " + data.lastName);
        }
      });
    }
  }, [currentUser]);

  return (
    <main className="home">
      {currentUser ? <Dashboard /> : <InitialButtons />}
    </main>
  );
}

export default Home;
