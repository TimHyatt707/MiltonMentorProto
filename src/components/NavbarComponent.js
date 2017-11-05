import React from "react";
import { Toolbar, ToolbarTitle } from "material-ui/Toolbar";

export default class NavbarComponent extends React.Component {
  render() {
    return (
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#66a7a7"
        }}
      >
        <ToolbarTitle text={this.props.pageTitle} />
      </Toolbar>
    );
  }
}
