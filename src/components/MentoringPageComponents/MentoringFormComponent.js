import React from "react";
import FontIcon from "material-ui/FontIcon";
import { Link } from "react-router-dom";

export default class MentoringFormComponent extends React.Component {
  render() {
    return (
      <div
        id="MentoringForm"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Link
          to={"/success"}
          style={{ margin: 20 }}
          className="waves-effect waves-light btn-large cyan darken-4 center-align"
        >
          Sign in through LinkedIn
        </Link>
        <Link
          style={{ margin: 20 }}
          to="/success"
          className="waves-effect waves-light btn-large blue darken-3 center-align"
        >
          Sign in through Facebook
        </Link>
        <Link
          style={{ margin: 20 }}
          to="/success"
          className="waves-effect waves-light btn-large green accent-2 center-align"
        >
          Sign in through Google
        </Link>
        <Link
          style={{ margin: 20 }}
          to="/success"
          className="waves-effect waves-light btn-large light-blue lighten-4 center-align"
        >
          Sign in through Twitter
        </Link>
      </div>
    );
  }
}
