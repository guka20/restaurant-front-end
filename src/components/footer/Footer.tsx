import React from "react";
import "./Footer.css";
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img
          className="chef-image"
          src={require("src/assets/logo/chef.png")}
          alt=""
        />
        Bentilzone
      </div>
      <hr />
      <div className="introduce-footer">
        <div className="copy-right">
          &#169; Gurami Davitadze. All Rights Reserved.
        </div>
        <ul className="icons">
          <li>
            <a
              href="https://www.linkedin.com/in/gurami-davitadze-5013a8224/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/guka20"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/gu.ka.75098/"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/gukadavitadze?igshid=YTQwZjQ0NmI0OA=="
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
