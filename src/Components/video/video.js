import React from "react";
import classes from "./video.module.css";

const Video = ({ text, vid }) => {
  return (
    <div className={classes.video}>
      <div className={classes.box}>
        <span>{text}</span>
        <span>Contact Me</span>
      </div>
      <video src={vid} autoPlay loop muted height="200"></video>
    </div>
  );
};

export default Video;
