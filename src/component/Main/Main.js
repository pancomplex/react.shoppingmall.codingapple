import React from "react";

import DisplayItems from "./DisplayItems";

import { Container, Button, Row, Col } from "react-bootstrap";
import "./main.css";

function Main(props) {
  const data = props.data;

  const renderDisplayItems = () => {
    let items = [];
    data.map((item) => {
      items.push(
        <DisplayItems
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          price={item.price}
          image={item.image}
        />
      );
    });
    return items;
  };

  return (
    <div>
      <div className="jumbotron">
        <h1>20% Season Off</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Aspernatur pariatur velit
          possimus! Eveniet rem consequuntur,
          <br /> cupiditate aperiam omnis animi ullam dolore dolor aut dolores illum reiciendis.
          <br /> Architecto excepturi vitae aperiam.
        </p>
        <Button variant="primary">Learn more</Button>
      </div>

      <Container>
        <Row>{renderDisplayItems()}</Row>
      </Container>
    </div>
  );
}

export default Main;
