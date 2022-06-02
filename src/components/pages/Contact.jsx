import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const emailCheck = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  const [errorEmail, setEmailError] = useState("");
  const [errorsubject, seterrorsubject] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (e) => {
    const inputType = e.target.id;
    const inputValue = e.target.value;

    switch(inputType) {
      case("email"):
        setEmail(inputValue);
        break;
      case("subject"):
        setSubject(inputValue);
        break;
      case("message"):
        setMessage(inputValue);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailCheck.test(email)) {
      setEmailError('Please enter a valid email');
      
    }
  }

  return(
<article className="card m-3">
  <div className="card-header">
    <h2 className="display-4">Contact</h2>
  </div>
  <div className="card sub-card m-3">
    <div className="card-body text-center">
      
      <div className="input-group mb-3">
        <input
          type="text"
          value={email}
          className="form-control"
          placeholder="Email"
        >
        </input>
      </div>
      <div className="input-group mb-3">
        <input 
        type="text" 
        value={subject}
        className="form-control" 
        placeholder="Subject">
        </input>
      </div>

      <div className="form-floating">
        <textarea 
          className="form-control"
          type="text" 
          value={message}
          placeholder="Your message here"
        >
        </textarea>
      </div>

      <button 
        className="btn btn-primary m-3"
        onClick={handleSubmit}
      >
        Submit
      </button>

    </div>
  </div>
</article>
  );
}