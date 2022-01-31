import React from "react";
import Rating from "@material-ui/lab/Rating";

export default function SimpleRating(props) {
  return (
    <div>
      <Rating name="read-only" value={props.value} readOnly color="#222" />
    </div>
  );
}
