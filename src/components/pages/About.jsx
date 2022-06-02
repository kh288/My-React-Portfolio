import React from "react";

export default function About() {
  return(
<article className="card m-3">
  <div className="card-header">
    <h2 className="display-4">I'm Kevin Hernandez</h2>
  </div>
  <div className="card sub-card m-3">
    <div className="card-body">
      <h4 className="card-title">Web Developer</h4>
      <h5 className="card-text">Studying at UC Berkeley Extension</h5>
      <p className="card-text">With a background in technical troubleshooting. I'm currently persuing a career in Web Development. I'm currently attending UC Berkeley Extension to create MERN Applications.</p>
      <p className="card-text">I have some fullstack applications under my belt so far and would love to work with you!</p>
      <p className="card-text">Check out my projects above on the portfolio tab!</p>
    </div>
  </div>
</article>
  );
}