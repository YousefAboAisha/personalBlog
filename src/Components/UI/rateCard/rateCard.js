import React from "react";
import classes from "./rateCard.module.css";
import SimpleRating from "../rating/Rating";

const RateCard = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.src} alt="person" />
      <h3>{props.name}</h3>
      <SimpleRating value={props.value} />
      <p>{props.text}</p>
      <i className="fas fa-quote-left"></i>
      <i className="fas fa-quote-right"></i>
    </div>
  );
};

export default RateCard;
