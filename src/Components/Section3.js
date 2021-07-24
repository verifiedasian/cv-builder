import React from "react";

function Section3(props) {
  return (
    <div className="section3-detail">
      <h4>{props.qualiType + " - " + props.eduOrganisation}</h4>
      <h5>{props.eduDateFrom + " - " + props.eduDateTo}</h5>
    </div>
  );
}

export default Section3;
