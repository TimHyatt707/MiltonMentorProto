import React from "react";
import SuccessPageLayout from "./SuccessPageComponents/SuccessPageLayoutComponent";
import Navbar from "./NavbarComponent";
import MentorFormComponent from "./SuccessPageComponents/MentorFormComponent";
import MenteeFormComponent from "./SuccessPageComponents/MenteeFormComponent";

export default function SuccessPage({ onSubmitRequest }) {
  return (
    <SuccessPageLayout>
      <Navbar pageTitle="Mentor Matcher" />
      <MentorFormComponent onSubmitRequest={onSubmitRequest} />
      <MenteeFormComponent onSubmitRequest={onSubmitRequest} />
    </SuccessPageLayout>
  );
}
