import React from "react";
import MentoringPageLayout from "./MentoringPageComponents/MentoringPageLayout";
import NavbarComponent from "./NavbarComponent";
import MentoringFormComponent from "./MentoringPageComponents/MentoringFormComponent";
import "./MentoringPageComponents/MentoringPage.css";

export default class MentoringPage extends React.Component {
  render() {
    return (
      <MentoringPageLayout>
        <NavbarComponent pageTitle="Mentoring" />
        <MentoringFormComponent />
      </MentoringPageLayout>
    );
  }
}
