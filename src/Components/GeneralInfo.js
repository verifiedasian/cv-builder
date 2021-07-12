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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="generalinfo-form">
        <h2>Personal Information</h2>
        <br />
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          placeholder="Last name"
        />
        <br />
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email Address"
        />
        <input
          type="text"
          name="phoneNum"
          value={this.state.phoneNum}
          onChange={this.handleChange}
          placeholder="Telephone Number"
        />
      </div>
    );
  }
}

export default GeneralInfo;
