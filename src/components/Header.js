import React from "react";

const Header = ({ data }) => {
  return (
    <header className="header">
      <h1>{data.name}</h1>
    </header>
  );
};

export default Header;
