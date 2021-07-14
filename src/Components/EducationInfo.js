import React from "react";

function EducationInfo(props) {
  return (
    <div className="educationinfo-form">
      <h2>Education</h2>
      <br />
      <input
        type="text"
        name="qualiType"
        value={props.qualiType}
        onChange={props.handleChange}
        placeholder="Type of Qualification Gained (i.e Bachelors, PHD)"
      />
      <br />
      <input
        type="text"
        name="eduOrganisation"
        value={props.eduOrganisation}
        onChange={props.handleChange}
        placeholder="Organisation providing qualification"
      />
      <br />
      <input
        type="date"
        name="eduDateFrom"
        value={props.eduDateFrom}
        onChange={props.handleChange}
        placeholder="Date of Study From"
      />
      <input
        type="date"
        name="eduDateTo"
        value={props.eduDateTo}
        onChange={props.handleChange}
        placeholder="Date of Study To"
      />
    </div>
  );
}

export default EducationInfo;
