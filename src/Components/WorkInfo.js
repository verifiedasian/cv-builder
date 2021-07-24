import React from "react";

function WorkInfo(props) {
  return (
    <div className="workinfo-form">
      <h2>Work Experience</h2>
      <form onSubmit={props.isEmpty}>
        <input
          type="text"
          name="positionName"
          value={props.positionName}
          onChange={props.handleChange}
          placeholder="Title of Position"
        />
        <input
          type="text"
          name="companyName"
          value={props.companyName}
          onChange={props.handleChange}
          placeholder="Name of Company"
        />
        <input
          type="text"
          name="location"
          value={props.location}
          onChange={props.handleChange}
          placeholder="Location"
        />
        <input
          type="text"
          name="taskDesc"
          value={props.taskDesc}
          onChange={props.handleChange}
          placeholder="Brief description of tasks"
        />
        <input
          type="date"
          name="workDateFrom"
          value={props.workDateFrom}
          onChange={props.handleChange}
          placeholder="Start Date"
        />
        <input
          type="date"
          name="workDateTo"
          value={props.workDateTo}
          onChange={props.handleChange}
          placeholder="Finish Date"
        />
        <input id="add-btn" type="submit" value="Add" />
      </form>
      <div className="line"></div>
    </div>
  );
}

export default WorkInfo;
