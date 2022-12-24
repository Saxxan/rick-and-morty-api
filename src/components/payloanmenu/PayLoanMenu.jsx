import React, { useState } from "react";
import "../transfermenu/transfermenu.css";

// Bootstrap components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function PayLoanMenu(props) {
  const [quantity, setQuantity] = useState();

  function handleSubmitPayLoan() {
    // Check if the user has enough money for the payment
    if (
      quantity <= props.currentUser.bankAccount &&
      props.currentUser.loan < 0
    ) {
      // Substrack money transfer
      props.handlePayLoan(
        props.currentUser.id,
        "bankAccount",
        props.currentUser.bankAccount - quantity
      );

      // Pay loan
      props.handlePayLoan(
        props.currentUser.id,
        "loan",
        props.currentUser.loan + quantity
      );
      props.launchAlert("success", "Transaction succeeded.");
    } else {
      props.launchAlert("danger", "Declined transaction.");
    }
    props.closePayLoanMenu();
  }

  return (
    <Form className="operations--menu">
      <h5>Pay loan:</h5>
      <Form.Group className="mb-3" size="sm">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          placeholder="Quantity"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </Form.Group>
      <Button
        className="operations--btn"
        variant="success"
        onClick={handleSubmitPayLoan}
      >
        Send
      </Button>
      <Button
        className="operations--btn"
        variant="outline-danger"
        onClick={props.closePayLoanMenu}
      >
        Cancel
      </Button>
    </Form>
  );
}

export default PayLoanMenu;
