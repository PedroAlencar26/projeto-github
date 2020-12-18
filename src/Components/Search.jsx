import React, { useState } from "react";

const Search = ({ searchUsers }) => {
  const [input, setInput] = useState("");
  const search = (e) => {
    setInput(e.target.value);
  };
  return (
    <form
      className="mt-5 mb5"
      onSubmit={(e) => {
        e.preventDefault();
        searchUsers(input);
      }}
    >
      <div class="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nome do Usuário Github..."
          aria-label="Usuario Github"
          aria-describedby="button-addon2"
          onChange={search}
          value={input}
        />
        <button class="btn btn-dark" type="submit" id="button-addon2">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
