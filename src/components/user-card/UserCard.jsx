import React from "react";
import "./userCard.css";

// Bootstrap components
import Button from "react-bootstrap/Button";

function UserCard(props) {
  return (
    <article className="userCard">
      <img className="user--image" src={props.img} alt="avatar image" />
      <section className="user--body">
        <section className="user--body__column">
          <h3 className="user--name">{props.name}</h3>
          <p className="user--info">{props.gender}</p>
          <p className="user--info">{props.specie}</p>
        </section>
        <section className="user--body__column">
          <p className="user--info">Cuenta bancaria: </p>
          <p className="user--info">Préstamo:</p>
        </section>
        <Button
          variant="outline-primary"
          className="user--actionButton"
          onClick={props.openUserSettings}
        >
          Gestionar
        </Button>
      </section>
    </article>
  );
}

export default UserCard;
