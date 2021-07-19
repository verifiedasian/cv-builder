import React from "react";

function PersonalInfo(props) {
  return (
    <div className="generalinfo-form">
      <h2>Personal Information</h2>
      <input
        type="text"
        name="firstName"
        value={props.firstName}
        onChange={props.handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={props.lastName}
        onChange={props.handleChange}
        placeholder="Last name"
      />
      <input
        type="text"
        name="email"
        value={props.email}
        onChange={props.handleChange}
        placeholder="Email Address"
      />
      <input
        type="text"
        name="phoneNum"
        value={props.phoneNum}
        onChange={props.handleChange}
        placeholder="Telephone Number"
      />
      <div className="line"></div>
    </div>
  );
}

export default PersonalInfo;
