import React from "react";

export default function Header({currentPage, handlePageChange}) {
  return(
  <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <a
      href="#"
      className="nav-item nav-link active grey-button"
      aria-current="page"
      >
        About
      </a>
      <a
      href="#"
      className="nav-item nav-link active"
      aria-current="page"
      >
        Contact
      </a>
      <a
      href="#"
      className="nav-item nav-link active"
      aria-current="page"
      >
        Portfolio
      </a>
        <a
        href="#"
        className="nav-item nav-link active"
        aria-current="page"
        >
          Resume
        </a>
    </div>
  </div>
  </nav>
);
}