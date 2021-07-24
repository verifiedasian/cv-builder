import React from "react";

function Section2(props) {
  return (
    <div className="section2-detail">
      <h4>{props.positionName + " - " + props.companyName}</h4>
      <h5>{props.location}</h5>
      <h5>{props.workDateFrom + " - " + props.workDateTo}</h5>
      <h5>{props.taskDesc}</h5>
    </div>
  );
}

export default Section2;
