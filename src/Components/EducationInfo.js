import React, { Component } from "react";

class EducationInfo extends Component {
  constructor() {
    super();
    this.state = {
      qualiType: "",
      eduOrganisation: "",
      eduDateFrom: "",
      eduDateTo: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="educationinfo-form">
        <h2>Education</h2>
        <br />
        <input
          type="text"
          name="qualiType"
          value={this.state.qualiType}
          onChange={this.handleChange}
          placeholder="Type of Qualification Gained (i.e Bachelors, PHD)"
        />
        <br />
        <input
          type="text"
          name="eduOrganisation"
          value={this.state.eduOrganisation}
          onChange={this.handleChange}
          placeholder="Organisation providing qualification"
        />
      </div>
    );
  }
}

export default EducationInfo;
