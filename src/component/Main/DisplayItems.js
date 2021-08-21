import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, Image } from "react-bootstrap";

function DisplayItems(props) {
  return (
    <Col
      md={4}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      as={Link}
      to={props.repository + `/detail/${props.id}`}
    >
      <Image src={props.image} fluid />
      <h4
        style={{
          fontWeight: "700",
        }}
      >
        {props.title}
      </h4>
      <p
        style={{
          margin: 0,
        }}
      >
        {props.content} &amp; {props.price}
      </p>
    </Col>
  );
}

export default DisplayItems;
