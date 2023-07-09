import React from "react";
import classes from "./ViewDetailsButton.module.css";

const ViewDetailsButton = ({ onViewDetails }) => {
  return (
    <button className={classes.buttonStyles} onClick={onViewDetails}>
      View Details
    </button>
  );
};

export default ViewDetailsButton;
