import React from "react";

export default function Contact() {
  return(
<article id="contact" className="card m-3">
  <div className="card-header">
    <h2 className="display-4">Contact</h2>
  </div>
  <div className="card sub-card m-3">
    <div className="card-body text-center">
      
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Email"></input>
      </div>
      <div className="input-group mb-3">
        <input 
        type="text" 
        className="form-control" 
        placeholder="Subject">
        </input>
      </div>

      <div className="form-floating">
        <textarea 
        className="form-control"
        type="text" 
          placeholder="Leave a comment here" 
          id="floatingTextarea2">
        </textarea>
      </div>

      <button className="btn btn-primary m-3">
        Submit
      </button>

    </div>
  </div>
</article>
  );
}