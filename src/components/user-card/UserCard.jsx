import React from "react";
import "./userCard.css";

// Bootstrap components
import Button from "react-bootstrap/Button";

function UserCard(props) {
  return (
    <article className="userCard">
      <img className="user--image" src={props.user.image} alt="" />
      <section className="user--body">
        <section className="user--body__header">
          <h5 className="user--name">{props.user.name}</h5>
          <Button
            variant="outline-primary"
            className="user--actionButton"
            onClick={props.openUserSettings}
          >
            Manage
          </Button>
        </section>
        <section className="user--body__main">
          <section className="user--body__column">
            <p className="user--info">{props.user.gender}</p>
            <p className="user--info">{props.user.species}</p>
          </section>
          <section className="user--body__column">
            <p className="user--info">Bank account: {props.user.bankAccount}</p>
            <p className="user--info">Loan: {props.user.loan}</p>
          </section>
        </section>
      </section>
    </article>
  );
}

export default UserCard;
