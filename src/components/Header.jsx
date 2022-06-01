import React from "react";

export default function Header({currentPage, handlePageChange}) {
  return(
  <>
  <nav className="navbar navbar-expand-md card navbar-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link nav-item active' : 'nav-link '}
          aria-current="page"
        >
          About
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link nav-item active' : 'nav-link '}
          aria-current="page"
        >
          Contact
        </a>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link '}
          aria-current="page"
        >
          Portfolio
        </a>
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link '}
            aria-current="page"
          >
            Resume
          </a>
      </div>
    </div>
  </nav>
  <div className="color-bar"></div>
  </>
);
}