import React, { Component } from "react";
import PersonalInfo from "./Components/PersonalInfo";
import EducationInfo from "./Components/EducationInfo";
import WorkInfo from "./Components/WorkInfo";
import Section3 from "./Components/Section3";
import Section2 from "./Components/Section2";
import Section1 from "./Components/Section1";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      workInfoList: [],
      educationInfoList: [],
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
      eduIsValid: false,
      workIsValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addWorkItem = this.addWorkItem.bind(this);
    this.addEduItem = this.addEduItem.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
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
    let result1 = Object.values(this.state.educationInfo).every(
      (e) => e !== ""
    );
    let result2 = Object.values(this.state.workInfo).every((e) => e !== "");

    this.setState({});
  }

  isEmpty(event) {
    event.preventDefault();

    this.setState({
      eduIsValid: result1,
      workIsValid: result2,
    });
    if (!this.state.eduIsValid) {
      alert("Please fill out form");
    } else {
      this.addEduItem();
    }

    if (!this.state.workIsValid) {
      alert("Please fill out form");
    } else {
      this.addWorkItem();
    }
  }

  addWorkItem(event) {
    event.preventDefault();

    this.setState({
      edu,
    });

    this.setState((prevState) => ({
      workInfoList: [
        ...prevState.workInfoList,
        {
          positionName: this.state.workInfo.positionName,
          companyName: this.state.workInfo.companyName,
          location: this.state.workInfo.location,
          taskDesc: this.state.workInfo.taskDesc,
          workDateFrom: this.state.workInfo.workDateFrom,
          workDateTo: this.state.workInfo.workDateTo,
        },
      ],
      workInfo: {
        ...prevState.workInfo,
        positionName: "",
        companyName: "",
        location: "",
        taskDesc: "",
        workDateFrom: "",
        workDateTo: "",
      },
    }));
  }

  addEduItem() {
    this.setState((prevState) => ({
      educationInfoList: [
        ...prevState.educationInfoList,
        {
          qualiType: this.state.educationInfo.qualiType,
          eduOrganisation: this.state.educationInfo.eduOrganisation,
          eduDateTo: this.state.educationInfo.eduDateTo,
          eduDateFrom: this.state.educationInfo.eduDateFrom,
        },
      ],
      educationInfo: {
        ...prevState.educationInfo,
        qualiType: "",
        eduOrganisation: "",
        eduDateFrom: "",
        eduDateTo: "",
      },
    }));
  }

  render() {
    const educationItem = this.state.educationInfoList.map((item) => (
      <Section3
        qualiType={item.qualiType}
        eduOrganisation={item.eduOrganisation}
        eduDateTo={item.eduDateTo}
        eduDateFrom={item.eduDateFrom}
      />
    ));
    const workItem = this.state.workInfoList.map((item) => (
      <Section2
        positionName={item.positionName}
        companyName={item.companyName}
        location={item.location}
        taskDesc={item.taskDesc}
        workDateFrom={item.workDateFrom}
        workDateTo={item.workDateTo}
      />
    ));
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
          isEmpty={this.isEmpty}
          handleChange={this.handleChange}
          qualiType={this.state.educationInfo.qualiType}
          eduOrganisation={this.state.educationInfo.eduOrganisation}
          eduDateFrom={this.state.educationInfo.eduDateFrom}
          eduDateTo={this.state.educationInfo.eduDateTo}
        />
        <WorkInfo
          isEmpty={this.isEmpty}
          handleChange={this.handleChange}
          positionName={this.state.workInfo.positionName}
          companyName={this.state.workInfo.companyName}
          taskDesc={this.state.workInfo.taskDesc}
          workDateFrom={this.state.workInfo.workDateFrom}
          workDateTo={this.state.workInfo.workDateTo}
          location={this.state.workInfo.location}
        />
        <div className="displaytemplate">
          <Section1
            firstName={this.state.personalInfo.firstName}
            lastName={this.state.personalInfo.lastName}
            email={this.state.personalInfo.email}
            phoneNum={this.state.personalInfo.phoneNum}
          />
          <div className="section2">
            <h3>Employment History</h3>
            {workItem}
          </div>
          <div className="section3">
            <h3>Education and Qualifications</h3>
            {educationItem}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
