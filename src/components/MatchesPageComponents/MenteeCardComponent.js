import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

export default class MenteeCardComponent extends React.Component {
  render() {
    const match = this.props.data;
    if (!this.props.data) {
      match = { name: "", major: "", avatar: "" };
    }
    return (
      <Card expandable={false}>
        <CardHeader
          title={match.name}
          subtitle={match.major}
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
