import React from "react";

export default class SuccessPageLayout extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.children[0]}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {this.props.children[1]}
          {this.props.children[2]}
        </div>
      </div>
    );
  }
}
