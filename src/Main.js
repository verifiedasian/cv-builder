import React, { Component } from "react";
import PersonalInfo from "./Components/PersonalInfo";
import EducationInfo from "./Components/EducationInfo";
import WorkInfo from "./Components/WorkInfo";

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
      },
      workInfo: {
        positionName: "",
        companyName: "",
        taskDesc: "",
        workDateFrom: "",
        workDateTo: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
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
          qualiType={this.state.educationInfo.qualiType}
          eduOrganisation={this.state.educationInfo.eduOrganisation}
          eduDateFrom={this.state.educationInfo.eduDateFrom}
          eduDateTo={this.state.educationInfo.eduDateTo}
        />
        <WorkInfo
          handleChange={this.handleChange}
          positionName={this.state.workInfo.positionName}
          companyName={this.state.workInfo.companyName}
          taskDesc={this.state.workInfo.taskDesc}
          workDateFrom={this.state.workInfo.workDateFrom}
          workDateTo={this.state.workInfo.workDateTo}
        />
      </div>
    );
  }
}

export default Main;
