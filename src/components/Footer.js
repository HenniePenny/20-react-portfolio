import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHub from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";

export default function Footer() {
  return (
    <div className="container footer">
      <p>
        © 2022: HenniePenny |{" "}
        <a href="https://github.com/HenniePenny">
          <img src={GitHub} alt="Link to GitHub" className="icon" />
        </a>{" "}
        |{" "}
        <a href="https://www.linkedin.com/in/henriette-kre%C3%9Fner-380b9515a/">
          <img src={LinkedIn} alt="Link to LinkedIn" className="icon" />
        </a>
      </p>

      <FontAwesomeIcon icon="fa-brands fa-github" />
      <FontAwesomeIcon icon="fa-brands fa-linkedin" />
    </div>
  );
}
