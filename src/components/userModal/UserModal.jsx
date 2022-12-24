import React, { useEffect, useState } from "react";
import "./usermodal.css";

// Bootstrap components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TransferMenu from "../transfermenu/TransferMenu";
import PayLoanMenu from "../payloanmenu/PayLoanMenu";

function UserModal(props) {
  const [transferOn, setTransferOn] = useState(false);
  const [payLoanOn, setPayLoanOn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  /**
   * Function that handles transfer menu open or not
   */
  function toggleTransferOn() {
    setTransferOn(!transferOn);
  }

  /**
   * Function that handles pay loan menu open or not
   */
  function togglePayLoanOn() {
    setPayLoanOn(!payLoanOn);
  }

  useEffect(() => {
    setCurrentUser(props.user);
  }, [props.user]);

  return currentUser ? (
    <Modal size="lg" centered {...props}>
      <Modal.Header closeButton>
        <Modal.Title>{currentUser.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Gender: {currentUser.gender}</p>
        <p>Specie: {currentUser.species}</p>
        <p>Bank account: {currentUser.bankAccount}</p>
        <p>Loan: {currentUser.loan}</p>
        <Button
          className="modal--btn"
          variant="outline-primary"
          onClick={toggleTransferOn}
        >
          Make a transfer
        </Button>
        <Button className="modal--btn" onClick={togglePayLoanOn}>
          Pay loan
        </Button>
        {/* Transfer menu */}
        {transferOn && (
          <TransferMenu
            users={props.users}
            currentUser={currentUser}
            handleTransfer={props.updateUsers}
            closeTransferMenu={toggleTransferOn}
          />
        )}
        {/* Pay loan menu */}
        {payLoanOn && (
          <PayLoanMenu
            currentUser={currentUser}
            handlePayLoan={props.updateUsers}
            closePayLoanMenu={togglePayLoanOn}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  ) : (
    ""
  );
}

export default UserModal;
