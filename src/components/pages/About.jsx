import React from "react";

export default function About() {
  return(
<article id="about" className="card m-3">
  <div className="card-header">
    <h2 className="display-4">About Me</h2>
  </div>
  <div className="card sub-card m-3">
    <div className="card-body">
      <h4 className="card-title">I'm Kevin Hernandez</h4>
      <h4 className="card-title">a Web Developer</h4>
      <h5 className="card-text">Studying at UC Berkeley Extension</h5>
      <p className="card-text">Learning the MERN stack</p>
    </div>
  </div>
</article>
  );
}