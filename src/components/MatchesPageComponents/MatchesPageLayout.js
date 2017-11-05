import React from "react";

export default class MatchesPageLayout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children[0]}
        <div>{this.props.children[1]}</div>
      </div>
    );
  }
}
