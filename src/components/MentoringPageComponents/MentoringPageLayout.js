import React from "react";

export default class MentoringPageLayout extends React.Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: 20 }}>{this.props.children[0]}</div>
        <div>{this.props.children[1]}</div>
      </div>
    );
  }
}
