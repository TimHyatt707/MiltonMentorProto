import React from "react";
import SuccessPageLayout from "./SuccessPageComponents/SuccessPageLayoutComponent";
import Navbar from "./NavbarComponent";
import MentorFormComponent from "./SuccessPageComponents/MentorFormComponent";
import MenteeFormComponent from "./SuccessPageComponents/MenteeFormComponent";

export default class SuccessPage extends React.Component {
  render() {
    return (
      <SuccessPageLayout>
        <Navbar pageTitle="Success!" />
        <MentorFormComponent />
        <MenteeFormComponent />
      </SuccessPageLayout>
    );
  }
}
