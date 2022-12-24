import React, { useState } from "react";
import "./transfermenu.css";

// Bootstrap components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TransferMenu(props) {
  const [quantity, setQuantity] = useState();
  const [beneficiaryId, setBeneficiaryId] = useState();

  /**
   * Function to handle a money transfer between users
   */
  function handleSubmitTransfer() {
    // Check if the user has enough money for the transfer
    if (
      quantity &&
      beneficiaryId &&
      quantity <= props.currentUser.bankAccount
    ) {
      // Substrack money transfer
      props.handleTransfer(
        props.currentUser.id,
        "bankAccount",
        props.currentUser.bankAccount - quantity
      );

      // Get the beneficiary user bank account
      let beneficiaryUserBankAccount;
      props.users.forEach((user) => {
        if (user.id === beneficiaryId) {
          beneficiaryUserBankAccount = Number(user.bankAccount);
        }
      });

      // Add money transfered
      props.handleTransfer(
        beneficiaryId,
        "bankAccount",
        beneficiaryUserBankAccount + quantity
      );

      props.launchAlert("success", "Transfer succeeded.");
    } else {
      props.launchAlert("danger", "Transfer failed.");
    }
    props.closeTransferMenu();
  }

  return (
    <Form className="operations--menu">
      <h5>Make a transfer:</h5>
      <Form.Group className="mb-3" size="sm">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          placeholder="Quantity"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </Form.Group>
      <Form.Group className="mb-3" size="sm">
        <Form.Label>Beneficiary</Form.Label>
        <Form.Select onChange={(e) => setBeneficiaryId(Number(e.target.value))}>
          <option>Choose user to transfer</option>
          {props.users.map((user) => (
            <option value={user.id}>{user.name}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button
        className="operations--btn"
        variant="success"
        onClick={handleSubmitTransfer}
      >
        Send transfer
      </Button>
      <Button
        className="operations--btn"
        variant="outline-danger"
        onClick={props.closeTransferMenu}
      >
        Cancel transfer
      </Button>
    </Form>
  );
}

export default TransferMenu;
