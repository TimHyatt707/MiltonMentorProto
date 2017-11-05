import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import { Link } from "react-router-dom";
import FlatButton from "material-ui/FlatButton";

export default class MentorCardComponent extends React.Component {
  render() {
    let match = this.props.data;
    if (!this.props.data) {
      match = { name: "", job: "", avatar: "" };
    }
    return (
      <Card expandable={false}>
        <CardHeader
          title={match.name}
          subtitle={match.job}
          avatar={match.avatar}
        />
        <CardActions>
          <FlatButton>
            <Link to={"/congratulations"}>Connect</Link>
          </FlatButton>
        </CardActions>
      </Card>
    );
  }
}
