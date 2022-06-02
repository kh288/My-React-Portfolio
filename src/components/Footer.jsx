import React from "react";

export default function Footer() {
  const icon = {
    fontSize: 48
  }
  return(
    <>
    <div id="footer" className="navbar mt-3 card fixed-bottom">
      <div className="container-fluid justify-content-center">
        <a
          href="https://github.com/kh288"
          rel="noreferrer"
          target="_blank">
          <i
            className="bi-github p-3 icon"
            style={icon}
          ></i>
        </a>
        <a 
          href="https://www.linkedin.com/in/kevin-hernandez-5a8243167"
          rel="noreferrer"
          target="_blank">
          <i
            className="bi-linkedin p-3 icon"
            style={icon}
          ></i>
        </a>
        <a 
          href="https://mail.google.com/"
          rel="noreferrer"
          target="_blank">
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