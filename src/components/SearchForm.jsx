import React, { useState } from "react";

export function SearchForm(props) {
  const [inputVal, setInputVal] = useState("");

  const handleChange = (event) => {
    setInputVal(event.target.value);
  };

  return (
    <>
      <input
        id="plant-query"
        name="plant-query"
        type="plant-query"
        placeholder="Enter search terms"
        value={inputVal}
        onChange={handleChange}
        autoComplete="off"
      />
      <button type="button" onClick={() => props.onSubmit(inputVal)}>
        Search
      </button>
    </>
  );
}
