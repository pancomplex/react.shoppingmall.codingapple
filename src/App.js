import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

import data from "./assets/data/data";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Main from "./component/Main/Main";
import Detail from "./component/Detail/Detail";

function App() {
  const [items, setItems] = useState(data);
  const [stocks, setStocks] = useState([10, 11, 12]);

  const itemsUpdate = (newItems) => {
    let updatedItems = [...items, ...newItems];
    updatedItems.map((item) => {
      if (!item.image) {
        item.image = `https://codingapple1.github.io/shop/shoes${item.id}.jpg`;
      }
    });
    setItems(updatedItems);
  };

  const orderItem = (id) => {
    let stocksArray = [...stocks];
    stocksArray[id]--;
    console.log("order, id: " + id + ", stocksArray: " + stocksArray);
    setStocks(stocksArray);
    console.log("stocks: ", stocks);
  };

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            ShoeShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Main data={items} itemsUpdate={itemsUpdate} />
        </Route>
        <Route path="/detail/:id">
          <Detail data={items} stocks={stocks} orderItem={orderItem} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
