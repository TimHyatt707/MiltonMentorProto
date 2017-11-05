import React from "react";
import MatchesPageLayout from "./MatchesPageComponents/MatchesPageLayout";
import Navbar from "./NavbarComponent";
import MentorCardComponent from "./MatchesPageComponents/MentorCardComponent";
import MenteeCardComponent from "./MatchesPageLayout/MenteeCardComponent";

export default class MatchesPage extends React.Component {
  render() {
    const matches = this.props.matches;
    if (!this.props.matches) {
      matches = [];
    }
    if (this.props.matches[0].role === "mentor") {
      return (
        <MatchesPageLayout>
          <Navbar pageTitle="Your Matches" />
          {matches.map(match => {
            return <MentorCardComponent data={match} />;
          })}
        </MatchesPageLayout>
      );
    } else {
      return (
        <MatchesPageLayout>
          <Navbar pageTitle="Your Matches" />
          {matches.map(match => {
            return <MenteeCardComponent data={match} />;
          })}
        </MatchesPageLayout>
      );
    }
  }
}
