import React from "react";
import MatchesPageLayout from "./MatchesPageComponents/MatchesPageLayout";
import Navbar from "./NavbarComponent";
import MentorCardComponent from "./MatchesPageComponents/MentorCardComponent";
import MenteeCardComponent from "./MatchesPageComponents/MenteeCardComponent";

export default class MatchesPage extends React.Component {
  render() {
    let matches = this.props.matches;
    if (!this.props.matches.length) {
      matches = [];
    } else {
      if (this.props.matches[0].role === "mentor") {
        return (
          <MatchesPageLayout>
            <Navbar pageTitle="Your Matches" />
            {matches.map(match => {
              return <MentorCardComponent data={match} />;
            })}
          </MatchesPageLayout>
        );
      }
    }
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
