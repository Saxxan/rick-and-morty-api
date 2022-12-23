import React, { useState } from "react";
import "./transfermenu.css";

// Bootstrap components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TransferMenu(props) {
  const [quantity, setQuantity] = useState();
  const [beneficiaryId, setBeneficiaryId] = useState();

  function handleSubmitTransfer() {
    // Check if the user has enough money for the transfer
    if (Number(quantity) <= Number(props.currentUser.bankAccount)) {
      props.handleTransfer(
        props.currentUser.id,
        "bankAccount",
        props.currentUser.bankAccount - quantity
      );
    } else {
      console.log("error");
      // Salta alert de error
    }
    props.closeTransferMenu();
  }

  return (
    <Form className="transfer--menu">
      <h4>Make a transfer:</h4>
      <Form.Group className="mb-3" size="sm">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          placeholder="Quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" size="sm">
        <Form.Label>Beneficiary</Form.Label>
        <Form.Select onChange={(e) => setBeneficiaryId(e.target.value)}>
          {props.users.map((user) => (
            <option value={user.id}>{user.name}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button
        className="transfer--btn"
        variant="success"
        onClick={handleSubmitTransfer}
      >
        Send transfer
      </Button>
      <Button
        className="transfer--btn"
        variant="outline-danger"
        onClick={props.closeTransferMenu}
      >
        Cancel transfer
      </Button>
    </Form>
  );
}

export default TransferMenu;
