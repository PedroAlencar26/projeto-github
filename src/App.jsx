import React, { useState } from "react";
import axios from "axios";
import Search from "./Components/Search.jsx";
import Users from "./Components/Users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchUsers = (input) => {
    setLoading(true);
    axios
      .get(`https://api.github.com/search/users?q=${input}&per_page=1`)
      .then((res) => {
        setUsers(res.data.items);
        setLoading(false);
        console.log(res.data.items);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const content = () => {
    if (loading) {
      return (
        <div
          class="d-flex justify-content-center mt-5"
          style={{ width: "100%", height: "5rem" }}
        >
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    } else {
      return <Users users={users} />;
    }
  };

  return (
    <div>
      <div className="container">
        <Search searchUsers={searchUsers} />
        {content()}
      </div>
    </div>
  );
};

export default App;
