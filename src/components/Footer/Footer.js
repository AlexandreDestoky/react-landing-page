import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer pt-1">
      <div className="container footer-container">
        <ul>
          <li>
            <a href="#">Privacy statement</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Cookie statement</a>
          </li>
          <li>
            <a href="#">@Copyright - DestokyGYM</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
