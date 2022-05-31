import React from "react";

export default function Contact() {
  return(
<article className="card m-3">
  <div className="card-header">
    <h2 className="display-4">Contact</h2>
  </div>
  <div className="sub-card m-3">
    <div className="card-body">
      <p className="card-text">Send an Email Message</p>
      
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
        <textarea className="form-control" 
          placeholder="Leave a comment here" 
          id="floatingTextarea2"></textarea>
        <label htmlFor="floatingTextarea2">Your Message Here</label>
      </div>

    </div>
  </div>
</article>
  );
}