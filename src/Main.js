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
        location: "",
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
          location={this.state.workInfo.location}
        />
        <div className="displaytemplate">
          <div className="section1">
            <h2>
              {this.state.personalInfo.firstName +
                " " +
                this.state.personalInfo.lastName}
            </h2>
            <br />
            <h3>
              {this.state.personalInfo.email +
                " | " +
                this.state.personalInfo.phoneNum}
            </h3>
          </div>
          <div className="section2">
            <h2>Employment History</h2>
            <br />
            <h3>{this.state.workInfo.positionName}</h3>
            <br />
            <p>{this.state.workInfo.companyName}</p>
            <br />
            <p>{this.state.workInfo.location}</p>
            <br />
            <p>{this.state.workInfo.workDateFrom}</p>
            <p>{this.state.workInfo.workDateTo}</p>
            <br />
            <p>{this.state.workInfo.taskDesc}</p>
          </div>
          <div className="section3">
            <h2>Education and Qualifications</h2>
            <br />
            <h3>{this.state.educationInfo.qualiType}</h3>
            <br />
            <p>{this.state.educationInfo.eduOrganisation}</p>
            <br />
            <p>{this.state.educationInfo.eduDateFrom}</p>
            <p>{this.state.educationInfo.eduDateTo}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
