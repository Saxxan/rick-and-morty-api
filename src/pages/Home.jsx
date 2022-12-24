import React, { useContext } from "react";
import "./home.css";

// Firebase
import { AuthContext } from "../authentication/AuthProvider";

// Components
import Dashboard from "../components/dashboard/Dashboard";
import InitialButtons from "../components/auth/InitialButtons";

function Home() {
  const { currentUser } = useContext(AuthContext);

  return (
    <main className="home">
      {currentUser ? <Dashboard /> : <InitialButtons />}
    </main>
  );
}

export default Home;
