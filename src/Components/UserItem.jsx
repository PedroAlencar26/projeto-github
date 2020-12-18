import React from "react";

const UserItem = ({ user }) => {
  return (
    <div className="col-md-3 mb-3">
      <div class="card" style={{ width: "18rem;" }}>
        <h3 class="card-header">{user.login}</h3>
        <div class="card-body">
          <img top width="100%" src={user.avatar_url} alt={user.login} />
          <p class="card-text"></p>
          <a href={`users/${user.login}`} rel="noopener noreferrer">
            <button className="btn btn-dark">Mais</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
