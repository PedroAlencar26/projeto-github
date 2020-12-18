import React, { useState } from "react";

const NavComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => setIsOpen(!isOpen);
  return (
    <div>
      <navbar className="navbar navbar-expand-xl navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Pesquisa Github API
          </a>
        </div>
      </navbar>
    </div>
  );
};

export default NavComponent;
