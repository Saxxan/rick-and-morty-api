import React, { useContext, useEffect, useState } from "react";
import "./home.css";

// Firebase
import { AuthContext } from "../authentication/AuthProvider";

// Components
import Dashboard from "../components/dashboard/Dashboard";
import InitialButtons from "../components/auth/InitialButtons";
import AlertNotification from "../components/notification/AlertNotification";

function Home() {
  const { currentUser } = useContext(AuthContext);

  const [onAlert, setOnAlert] = useState(false);
  const [alertDetails, setAlertDetails] = useState({
    variant: "primary",
    message: "Default message",
  });

  /**
   * Function that launchs alert notification
   * @param {*} variant
   * @param {*} message
   */
  function launchAlert(variant, message) {
    let newAlertDetails = {
      variant: variant,
      message: message,
    };
    setAlertDetails(newAlertDetails);
    setOnAlert(true);
  }

  /**
   * Effect hook to close the notification alert
   */
  useEffect(() => {
    if (onAlert) {
      setTimeout(() => {
        setOnAlert(false);
      }, 3000);
    }
  }, [onAlert]);

  return (
    <>
      <main className="home">
        {onAlert && <AlertNotification alertDetails={alertDetails} />}
        {currentUser ? (
          <Dashboard launchAlert={launchAlert} />
        ) : (
          <InitialButtons launchAlert={launchAlert} />
        )}
      </main>
    </>
  );
}

export default Home;
