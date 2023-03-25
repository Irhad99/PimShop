import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Prijavi se</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Prijavi se</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>Dostava</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Dostava</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>Plaćanje</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Plaćanje</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>Završi Narudžbu</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Napravi Narudžbu</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
