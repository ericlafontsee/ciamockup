import React from "react";
import Navbar from "../Navbar";
import "./style.css";

function Header() {
  return (
    <header id="header" className="container-fluid">
      <div className="row">
        <div className="col">
          <Navbar/>
        </div>
      </div>
    </header>
  );
}
export default Header;
