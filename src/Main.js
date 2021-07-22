import React, { Component } from "react";
import PersonalInfo from "./Components/PersonalInfo";
import EducationInfo from "./Components/EducationInfo";
import WorkInfo from "./Components/WorkInfo";
import Section3 from "./Components/Section3";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNum: "",
      },
      educationInfo: {
        qualiType: "",
        eduOrganisation: "",
        eduDateFrom: "",
        eduDateTo: "",
        eduInfoList: [],
      },
      workInfo: {
        positionName: "",
        companyName: "",
        location: "",
        taskDesc: "",
        workDateFrom: "",
        workDateTo: "",
        workInfoList: [],
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState((prevState) => ({
      personalInfo: {
        ...prevState.personalInfo,
        [event.target.name]: event.target.value,
      },
      educationInfo: {
        ...prevState.educationInfo,
        [event.target.name]: event.target.value,
      },
      workInfo: {
        ...prevState.workInfo,
        [event.target.name]: event.target.value,
      },
    }));
  }

  handleSubmit(event) {
    this.setState((prevState) => ({
      workInfo: {
        ...prevState.workInfo,
        [event.target.workInfoList]: [
          <Section3
            qualiType={this.state.workInfo.qualiType}
            eduOrganisation={this.state.workInfo.eduOrganisation}
            eduDateFrom={this.state.workInfo.eduDateFrom}
            eduDateTo={this.state.workInfo.eduDateTo}
          />,
        ],
      },
      educationInfo: {
        ...prevState.educationInfo,
      },
    }));
    event.preventDefault();
  }

  render() {
    return (
      <div className="maincontent">
        <PersonalInfo
          handleChange={this.handleChange}
          firstName={this.state.personalInfo.firstName}
          lastName={this.state.personalInfo.lastName}
          email={this.state.personalInfo.email}
          phoneNum={this.state.personalInfo.phoneNum}
        />
        <EducationInfo
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          qualiType={this.state.educationInfo.qualiType}
          eduOrganisation={this.state.educationInfo.eduOrganisation}
          eduDateFrom={this.state.educationInfo.eduDateFrom}
          eduDateTo={this.state.educationInfo.eduDateTo}
        />
        <WorkInfo
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          positionName={this.state.workInfo.positionName}
          companyName={this.state.workInfo.companyName}
          taskDesc={this.state.workInfo.taskDesc}
          workDateFrom={this.state.workInfo.workDateFrom}
          workDateTo={this.state.workInfo.workDateTo}
          location={this.state.workInfo.location}
        />
        <div className="displaytemplate">
          <div className="section1">
            <h2>
              {this.state.personalInfo.firstName +
                " " +
                this.state.personalInfo.lastName}
            </h2>
            <p>
              {this.state.personalInfo.email +
                " | " +
                this.state.personalInfo.phoneNum}
            </p>
          </div>
          <div className="section2">
            <h3>Employment History</h3>
            <br />
            <h4>{this.state.workInfo.positionName}</h4>
            <br />
            <h4>{this.state.workInfo.companyName}</h4>
            <br />
            <h5>{this.state.workInfo.location}</h5>
            <br />
            <h5>
              {this.state.workInfo.workDateFrom +
                " - " +
                this.state.workInfo.workDateTo}
            </h5>
            <br />
            <h5>{this.state.workInfo.taskDesc}</h5>
          </div>
          <div className="section3">
            <h3>Education and Qualifications</h3>
            {this.state.educationInfo.eduInfoList}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
