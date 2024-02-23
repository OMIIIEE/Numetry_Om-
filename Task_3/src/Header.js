// Header.js

import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="bg-white p-3">
      <div className="container">
        <div className="row1 align-items-center ">
          
          <div className="col-md-4 logo">
            <img
              src="books.ico"
              alt="Library Logo"
              className="img-fluid"
            />
            
            <h1>Library</h1>
          </div>

          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input
                className=" se"
                type="search"
                placeholder="Search by book name"
                aria-label="Search"
              />
              <button className=" bt" type="submit">
                Search
              </button>
            </form>
          </div>

          <div className="col-md-4 text-right ">
            <button className="btn btn-outline-primary mr-2 btn ">Login</button>
            <button className="btn btn-primary btn">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
