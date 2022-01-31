import React from "react";
import classes from "./review.module.css";
import { useNavigate, Route, Link } from "react-router-dom";

const Review = ({ card }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("checkout");
  };

  return (
    <div className={classes.card}>
      {card.icon ? <span>Exclusive</span> : null}
      <div className={classes.price}>
        <span> {card.price}$</span>
      </div>
      <div className={classes.type}>
        <h3>{card.type}</h3>
      </div>
      <ul>
        {card.list.map((elem, index) => {
          return (
            <li key={index}>
              {elem.text}
              <span>
                <i
                  className={
                    elem.class
                      ? `fas fa-check ${classes.green}`
                      : `fas fa-times ${classes.red}`
                  }
                ></i>
              </span>
            </li>
          );
        })}
      </ul>

      <Link to="checkout">
        <button>Purchase</button>
      </Link>
    </div>
  );
};

export default Review;
