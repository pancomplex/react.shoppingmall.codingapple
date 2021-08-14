import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { Container, Row, Col, Alert, Button } from "react-bootstrap";

function Detail(props) {
  const data = props.data;
  const { id } = useParams();
  // const stock = props.stocks[id];
  const [show, setShow] = useState(true);

  const history = useHistory();

  console.log("Detail렌더링 ");

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => {
      clearTimeout(showTimer);
    };
  }, []);

  let thisItem = data.find((item) => {
    return item.id == id;
  });

  return (
    <Container>
      {show && (
        <Alert variant="warning" style={{ textAlign: "center" }}>
          재고가 얼마 남지 않았습니다.
        </Alert>
      )}

      <Row>
        <Col md={6}>
          <img src={thisItem.image} width="100%" />
        </Col>
        <Col
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4>{thisItem.title}</h4>
          <p>{thisItem.content}</p>
          <p>{thisItem.price}원</p>
          <p>재고 : {props.stocks[id]}</p>
          <div>
            <Button
              variant="danger"
              onClick={() => {
                props.orderItem(id);
              }}
            >
              주문하기
            </Button>
            <Button
              variant="danger"
              style={{
                marginLeft: 5,
              }}
              onClick={() => {
                history.goBack();
              }}
            >
              뒤로가기
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
