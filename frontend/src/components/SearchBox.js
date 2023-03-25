import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const history = useNavigate();

  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history(`/search/${keyword}`);
    } else {
      history("/");
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <div className="search-form">
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Pretražite Proizvode..."
          className="search-input"
        />

        <Button type="submit" variant="outline-success" className="p-2">
          Pretraži
        </Button>
      </div>
    </Form>
  );
};

export default SearchBox;
