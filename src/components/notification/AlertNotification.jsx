import React from "react";
import "./notification.css";

// Bootstrap components
import Alert from "react-bootstrap/Alert";

function AlertNotification(props) {
  return (
    <Alert className="alertNotification" variant={props.alertDetails.variant}>
      {props.alertDetails.message}
    </Alert>
  );
}

export default AlertNotification;
