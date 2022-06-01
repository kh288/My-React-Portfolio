import React from "react";

export default function Footer() {
  const icon = {fontSize: 48}
  return(
    <>
    <div id="footer" className="navbar card fixed-bottom bg-light">
      <div className="container-fluid justify-content-center">
        <a href="https://github.com/kh288">
          <i
            className="bi-github p-3 icon"
            style={icon}
          ></i>
        </a>
        <a href="https://www.linkedin.com/in/kevin-hernandez-5a8243167">
          <i
            className="bi-linkedin p-3 icon"
            style={icon}
          ></i>
        </a>
        <a href="https://mail.google.com/">
          <i
            className="bi-envelope-fill p-3 icon"
            style={icon}
          ></i>
        </a>
      </div>
    </div>
    </>
  );
}