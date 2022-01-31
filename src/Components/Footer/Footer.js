import React from "react";
import "./Footer.css";
import Navigation from "../UI/link/link";

const Footer = () => {
  return (
    <div className="footer">
      <i className="fas fa-fire"></i>
      <div className="left">
        <div className="box">
          <div className="leftSide">
            <i className="fas fa-user"></i>
          </div>
          <div className="rightSide">
            <h4>Name</h4>
            <span>Yousef Rashad Abu Aisha</span>
          </div>
        </div>

        <div className="box">
          <div className="leftSide">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="rightSide">
            <h4>Address</h4>
            <span>Palestine , Gaza , Tal Al Hawa</span>
          </div>
        </div>

        <div className="box">
          <div className="leftSide">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="rightSide">
            <h4>E-mail</h4>
            <span>yousef.aboesha@hotmail.com</span>
          </div>
        </div>

        <div className="box">
          <div className="leftSide">
            <i className="fas fa-phone-alt"></i>
          </div>
          <div className="rightSide">
            <h4>Phone number</h4>
            <span>+970 592-55-1405</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="navigations">
          <Navigation path="/personalBlog" name="Home" />
          <Navigation path="/projects" name="Projects" />
          <Navigation path="/contact" name="Contact Me" />
        </div>

        <div className="social">
          <div>
            <a
              target="_blank"
              href="https://www.facebook.com/yousef.aboesha.9/"
            >
              <i className="fab fa-facebook"></i>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/yousef-aboesha-9b40b4193/"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a target="_blank" href="https://twitter.com/_abuAisha">
              <i className="fab fa-twitter"></i>
            </a>

            <a target="_blank" href="https://github.com/YousefAboAisha">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <span> All Rights Reserved To Yousef R Abo Aisha ©</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
