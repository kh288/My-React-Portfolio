import React from "react";
import burgerSnippet01 from "../../assets/burger-snippet-cropped-02.png";

export default function Portfolio() {
  const imageStuff = {
    backgroundImage: `url(${burgerSnippet01})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: `cover`,
    minHeight: 480
  }

  return(
    <article id="portfolio" className="card m-3">
        <div className="card-header">
          <h2 className="display-4">Portfolio</h2>
        </div>
        
        <div className="m-3 gap-3 row">
          <div
          className="card col-md text-center p-3" 
          // style={imageStuff}
          >
            <h3>Social Burger</h3>
            <p>Full-Stack Application</p>
            <img src={burgerSnippet01} alt="Social burger app"></img>
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
          <div
          className="card col-md text-center p-3"
          >
            <h3>Social Burger</h3>
            <p>Full-Stack Application</p>
            <img src={burgerSnippet01} alt="Social burger app"></img>
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
          <div
          className="card col-md text-center p-3" 
          // style={imageStuff}
          >
            <h3>Social Burger</h3>
            <p>Full-Stack Application</p>
            <img src={burgerSnippet01} alt="Social burger app"></img>
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
          <div
          className="card col-md text-center p-3"
          >
            <h3>Social Burger</h3>
            <p>Full-Stack Application</p>
            <img src={burgerSnippet01} alt="Social burger app"></img>
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

    </article>
  );
}