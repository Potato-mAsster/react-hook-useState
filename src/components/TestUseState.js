import React, { useState } from "react";
import { Card, Button } from 'react-bootstrap'; 

const getInitialState = () => false;

export default function Component() {
  const [visible, setVisibility] = useState(getInitialState);

  const handleClick = () => {
    setVisibility((currentValue) => !currentValue);
  };

  return (
    <div className="container">
      <h1>What is React?</h1>

      <Button variant="primary" onClick={handleClick}>
        Show
      </Button>

      {visible && (
        <Card>
          <Card.Body> A JavaScript library with virtual DOM </Card.Body>
        </Card>
      )}
    </div>
  );
}
