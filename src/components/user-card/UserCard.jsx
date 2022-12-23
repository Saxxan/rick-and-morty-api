import React from "react";
import "./userCard.css";

// Bootstrap components
import Button from "react-bootstrap/Button";

function UserCard(props) {
  return (
    <article className="userCard">
      <img className="user--image" src={props.img} alt="" />
      <section className="user--body">
        <section className="user--body__header">
          <h5 className="user--name">{props.name}</h5>
          <Button
            variant="outline-primary"
            className="user--actionButton"
            onClick={props.openUserSettings}
          >
            Gestionar
          </Button>
        </section>
        <section className="user--body__main">
          <section className="user--body__column">
            <p className="user--info">{props.gender}</p>
            <p className="user--info">{props.specie}</p>
          </section>
          <section className="user--body__column">
            <p className="user--info">Cuenta bancaria: {props.bankAccount}</p>
            <p className="user--info">Préstamo: {props.loan}</p>
          </section>
        </section>
      </section>
    </article>
  );
}

export default UserCard;
