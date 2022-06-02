import React from "react";
import burgerSnippet01 from "../../images/burger.png";
import jateSnippet from "../../images/text-editor.png";
import stockSnippet from "../../images/stock-portfolio.png"
import socialSnippet from "../../images/social-media-api.png"

export default function Portfolio() {
  // const imageStuff = {
  //   backgroundImage: `url(${burgerSnippet01})`,
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: `cover`,
  //   minHeight: 480
  // }
  const imageAdj = {
    objectFit: "contain",
    width: "100%"
  }

  return(
    <article className="card m-3">
        <div className="card-header">
          <h2 className="display-4">Portfolio</h2>
        </div>
        
        <div className="m-3 gap-3 row">
          
          <div className="card sub-card col-md text-center p-3">
            <h3>Social Burger</h3>
            <p>Full-Stack Application</p>
            <img
              src={burgerSnippet01}
              alt="Social burger app"
              style={imageAdj}>
            </img>
            <div className="mt-3">
              <a
                className="btn btn-primary mx-1"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/kh288/Social-Burger"
              >Repository</a>
              <a
                className="btn btn-primary mx-1"
                rel="noreferrer"
                target="_blank"
                href="https://social-burger.herokuapp.com"
              >Deployed</a>
            </div>

          </div>

          <div className="card sub-card col-md text-center p-3">
            <h3>J.A.T.E.</h3>
            <p>PWA Application</p>
            <img
              src={jateSnippet}
              alt="Social burger app"
              style={imageAdj}>
            </img>
            <div className="mt-3">
              <a
                className="btn btn-primary mx-1"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/kh288/Social-Burger"
              >Repository</a>
              <a
                className="btn btn-primary mx-1"
                rel="noreferrer"
                target="_blank"
                href="https://social-burger.herokuapp.com"
              >Deployed</a>
            </div>
          </div>
        </div>

        <div className="m-3 gap-3 row">
          <div className="card sub-card col-md text-center p-3">
            <h3>Stock Portfolio Analyzer</h3>
            <p>Front-end Application</p>
            <img
              src={stockSnippet}
              alt="Stock app"
              style={imageAdj}>
            </img>
            <div className="mt-3">
              <a
                className="btn btn-primary mx-1"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/kh288/Stock-Portfolio-Analyzer"
              >Repository</a>
              <a
                className="btn btn-primary mx-1"
                rel="noreferrer"
                target="_blank"
                href="https://social-burger.herokuapp.com"
              >Deployed</a>
            </div>
          </div>
          <div className="card sub-card col-md text-center p-3">
            <h3>Social Media API</h3>
            <p>Back-end Application</p>
            <img
              src={socialSnippet}
              alt="Social Media App"
              style={imageAdj}>
            </img>
            <div className="mt-3">
              <a
                className="btn btn-primary mx-1"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/kh288/Social-Network-API"
              >Repository</a>
              <a
                className="btn btn-primary mx-1"
                rel="noreferrer"
                target="_blank"
                href="https://kevins-social-media-api.herokuapp.com/api/users"
              >Deployed</a>
            </div>
          </div>
        </div>

    </article>
  );
}