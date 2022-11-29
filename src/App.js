import React, { useState } from "react";

import Icon from "./components/Icon";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const itemArray = new Array(9).fill("empty");
const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const [changeColor, setChangeColor] = useState("#F9A03F");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
    setChangeColor("#F9A03F");
  };

  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} wins!`);
      if (winMessage === "cross wins!") setChangeColor("#92caff");
      else setChangeColor("#aa8bff");
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMessage(`${itemArray[3]} wins!`);
      if (winMessage === "cross wins!") setChangeColor("#92caff");
      else setChangeColor("#aa8bff");
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMessage(`${itemArray[6]} wins!`);
      if (winMessage === "cross wins!") setChangeColor("#92caff");
      else setChangeColor("#aa8bff");
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} wins!`);
      if (winMessage === "cross wins!") setChangeColor("#92caff");
      else setChangeColor("#aa8bff");
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMessage(`${itemArray[1]} wins!`);
      if (winMessage === "cross wins!") setChangeColor("#92caff");
      else setChangeColor("#aa8bff");
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} wins!`);
      if (winMessage === "cross wins!") setChangeColor("#92caff");
      else setChangeColor("#aa8bff");
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} wins!`);
      if (winMessage === "cross wins!") setChangeColor("#92caff");
      else setChangeColor("#aa8bff");
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} wins!`);
      if (winMessage === "cross wins!") setChangeColor("#92caff");
      else setChangeColor("#aa8bff");
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" &&
      itemArray[3] !== "empty" &&
      itemArray[4] !== "empty" &&
      itemArray[5] !== "empty" &&
      itemArray[6] !== "empty" &&
      itemArray[7] !== "empty" &&
      itemArray[8] !== "empty"
    ) {
      setWinMessage("draw!");
      setChangeColor("white");
    }
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage.toLocaleUpperCase(), { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("This field is already filled", { type: "error" });
    }

    checkIsWinner();
  };
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" theme="dark" />
      <Row>
        <Col md={4} className="offset-md-4">
          {winMessage ? (
            <div className="margin">
              <h1
                className=" text-center text-uppercase"
                style={{ color: `${changeColor}` }}
              >
                {winMessage}
              </h1>
            </div>
          ) : (
            <h1
              className="margin text-center "
              style={{ color: `${changeColor}` }}
            >
              {isCross ? "Cross" : "Circle"}'s Turn
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card
                className="card"
                onClick={() => changeItem(index)}
                style={{ backgroundColor: "#141414" }}
              >
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
          {winMessage ? (
            <div className=" margin">
              <Button
                className="p-3"
                color="success"
                block
                onClick={reloadGame}
              >
                Reload the game
              </Button>
            </div>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
