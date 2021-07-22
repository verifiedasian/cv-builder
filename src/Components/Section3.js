import React from "react";

function Section3(props) {
  return (
    <div className="section3-detail">
      <h4>{props.qualiType}</h4>
      <p>{props.eduOrganisation}</p>
      <p>{props.eduDateFrom}</p>
      <p>{props.eduDateTo}</p>
    </div>
  );
}

export default Section3;
