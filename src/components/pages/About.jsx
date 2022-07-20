import React from "react";
import kevinPic from "../../images/kevin-pic.png"

export default function About() {
  return (
    <article className="card m-3">
      <div className="card-header text-center">
        <img src={kevinPic} alt="Picture of kevin" style={{ width: "50%" }} />
        <h2 className="display-4">I'm Kevin Hernandez</h2>
      </div>
      <div className="card sub-card m-3">
        <div className="card-body">
          <h4 className="card-title">Web Developer</h4>
          <h5 className="card-text">Recent Graduate of UC Berkeley Extension</h5>
          <p className="card-text">Currently working at 2U Inc as an Instructional Web Development Specialist where I teach creating MERN Applications. </p>
          <p className="card-text">I have some fullstack applications under my belt so far and would love to work with you!</p>
          <p className="card-text">Check out my projects above on the portfolio tab!</p>
        </div>
      </div>
    </article>
  );
}