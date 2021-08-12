import React, { useState } from "react";

import axios from "axios";

import DisplayItems from "./DisplayItems";

import { Container, Button, Row, Col } from "react-bootstrap";
import "./main.css";

function Main(props) {
  const items = props.data;
  const [showBtn, setShowBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const renderDisplayItems = (items) => {
    let itemsArray = [];
    items.map((item) => {
      itemsArray.push(
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
    return itemsArray;
  };

  return (
    <div className="Main">
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

      <Container className="displayItems">
        <Row>{renderDisplayItems(items)}</Row>

        {showBtn && (
          <Button
            variant="primary"
            disabled={isLoading}
            onClick={() => {
              setIsLoading(true);
              axios
                .get("https://codingapple1.github.io/shop/data2.json")
                .then((result) => {
                  setShowBtn(false);
                  props.itemsUpdate(result.data);
                  setIsLoading(false);
                })
                .catch((err) => {
                  console.err(err);
                  setIsLoading(false);
                });
            }}
          >
            {isLoading ? "로딩중..." : "더보기"}
          </Button>
        )}
      </Container>
    </div>
  );
}

export default Main;
