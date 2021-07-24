import React from "react";

function Section1(props) {
  return (
    <div className="section1-detail">
      <h2>{props.firstName + " " + props.lastName}</h2>
      <p>{props.email + " | " + props.phoneNum}</p>
    </div>
  );
}

export default Section1;
