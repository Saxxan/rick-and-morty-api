import React from "react";
import "./userCard.css";

// Bootstrap components
import Card from "react-bootstrap/Card";

function UserCard(props) {
  return (
    <Card className="userCard">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.gender}</Card.Text>
        <Card.Text>{props.specie}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
