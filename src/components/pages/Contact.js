import React from "react";

export default function Contact() {
  return (
    <div classNameName="container-fluid">
      <h2>Contact Me</h2>

      <form>
        <div className="form-group">
          <label for="inputName">Name:</label>
          <input
            type="name"
            className="form-control"
            id="inputName"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label for="inputEmail">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="example@email.com"
          />
        </div>
        <div className="form-group">
          <label for="inputMessage">Message:</label>
          <textarea
            className="form-control"
            id="inputMessage"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" classNameName="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
