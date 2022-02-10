import React from "react";
import "./Heading.scss";

const Heading = (props) => {
  return (
    <div className="heading">
      <div className="title">{props.title}</div>
      <div className="sub-title">{props.subtitle}</div>
    </div>
  );
};

export default Heading;
