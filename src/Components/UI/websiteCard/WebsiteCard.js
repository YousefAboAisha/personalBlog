import React from "react";
import classes from "./WebsiteCard.module.css";

const WebsiteCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.img}>
        <img src={props.img} alt="Photo" />
      </div>
      <hr />
      <div className={classes.text}>
        <span>{props.title}</span>
        <div className={classes.desc}>
          {props.description.map((elem, index) => {
            return <span key={index}>{elem}</span>;
          })}
        </div>

        <div className={classes.btns}>
          <a href={props.github_link} target="_blank">
            <button>
              Source Code
              <i class="fab fa-github"></i>
            </button>
          </a>

          <a href={props.live_link} target="_blank" title={"Live View"}>
            <button>
              <i class="far fa-eye"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;
