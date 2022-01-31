import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import Navigation from "../UI/link/link";
import SideBar from "../Sideabar/Sidebar";

const Navbar = () => {
  localStorage.setItem("color", "#ff4c29");
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(localStorage.getItem("color"));

  const color = getComputedStyle(document.documentElement).getPropertyValue(
    "--color4"
  );

  const changeHandler = (e) => {
    setValue(e.target.value);
    document.documentElement.style.setProperty("--color4", value);
  };

  useEffect(() => {
    localStorage.setItem("color", value);
  }, [value]);

  console.log(color);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav>
        <div className={classes.left}>
          <Navigation
            path="personalBlog"
            name="Blog."
            className={classes.logo}
          />
          <i className="fas fa-fire"></i>
        </div>

        <div className={classes.middle}>
          <span>Chage Theme</span>
          <input
            type="color"
            value={value}
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <div className={classes.right}>
          <Navigation path="personalBlog" name="Home" />
          <Navigation path="projects" name="Projects" />
          <Navigation path="contact" name="Contact Me" />
        </div>

        <div className={classes.toggle} onClick={clickHandler}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
      <SideBar toggle={toggle} setToggle={setToggle} />
    </>
  );
};

export default Navbar;
