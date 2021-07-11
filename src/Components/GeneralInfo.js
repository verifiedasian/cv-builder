import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNum: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {}

  render() {
    return (
      <div className="generalinfo-form">
        <label>First Name:</label>
      </div>
    );
  }
}

export default GeneralInfo;
