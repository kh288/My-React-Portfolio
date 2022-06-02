import React from "react";
import resume from "../../assets/Resume-2022-May.pdf"

export default function Resume() {
  return(
<article className="card m-3">
  <div className="card-header">
    <h2 className="display-4">Resume</h2>
  </div>
  <div className="card sub-card m-3">
    <div className="card-body text-center">
      <a className="btn btn-primary" rel="noreferrer" target="_blank" href={resume}>Resume PDF</a>
    </div>
    <div className="card-body">
      <div className="row gap-3 p-3">

        <div className="col-md card p-3">
          <h4 className="card-title">Frontend</h4>
          <ul>
            <li>
              <p>HTML</p>
            </li>
            <li>
              <p>CSS</p>
            </li>
            <li>
              <p>Javascript</p>
            </li>
            <li>
              <p>Handlebars</p>
            </li>
            <li>
              <p>Bootstrap</p>
            </li>
            <li>
              <p>jQuery</p>
            </li>
            <li>
              <p>React</p>
            </li>
          </ul>
        </div>
        <div className="col-md card p-3">
          <h4 className="card-title">Backend</h4>
          <ul>
            <li>
              <p>Node</p>
            </li>
            <li>
              <p>Express</p>
            </li>
            <li>
              <p>SQL</p>
            </li>
            <li>
              <p>REST APIs</p>
            </li>
            <li>
              <p>Insomnia</p>
            </li>
            <li>
              <p>Mongoose</p>
            </li>
            <li>
              <p>MongoDB</p>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>
</article>
  );
}