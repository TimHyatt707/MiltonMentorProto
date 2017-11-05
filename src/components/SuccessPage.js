import React from "react";
import SuccessPageLayout from "./SuccessPageComponents/SuccessPageLayoutComponent";
import Navbar from "./NavbarComponent";
import MentorFormComponent from "./SuccessPageComponents/MentorFormComponent";
import MenteeFormComponent from "./SuccessPageComponents/MenteeFormComponent";

export default class SuccessPage extends React.Component {
  render() {
    return (
      <SuccessPageLayout>
        <Navbar pageTitle="Mentor Matcher" />
        <MentorFormComponent onSubmit={this.props.onSubmit} />
        <MenteeFormComponent onSubmit={this.props.onSubmit} />
      </SuccessPageLayout>
    );
  }
}
