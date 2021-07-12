import React, { Component } from "react";
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";

class Main extends Component {
  render() {
    return (
      <div className="maincontent">
        <GeneralInfo />
        <EducationInfo />
        {/**<PracticalInfo />**/}
      </div>
    );
  }
}

export default Main;
