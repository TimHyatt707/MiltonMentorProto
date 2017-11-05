import React from "react";
import Paper from "material-ui/Paper";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";

export default class MentorFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valueSet1: 1, valueSet2: 1, valueSet3: 1 };
  }
  render() {
    return (
      <Paper zdepth={2} style={{ minWidth: 500, maxWidth: 500, margin: 40 }}>
        <h1 style={{ display: "flex", justifyContent: "center" }}>Mentor</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "spaceAround"
          }}
        >
          <DropDownMenu
            value={this.state.valueSet1}
            onChange={this._handleChange1}
            style={{ maxWidth: 250, margin: 20 }}
          >
            <MenuItem value={1} label="Personality" primaryText="something" />
            <MenuItem value={2} label="Personality" primaryText="something" />
            <MenuItem value={3} label="Personality" primaryText="something" />
            <MenuItem value={4} label="Personality" primaryText="something" />
          </DropDownMenu>
          <DropDownMenu
            value={this.state.valueSet2}
            onChange={this._handleChange2}
            style={{ maxWidth: 250, margin: 20 }}
          >
            <MenuItem value={1} label="Personality" primaryText="something" />
            <MenuItem value={2} label="Personality" primaryText="something" />
            <MenuItem value={3} label="Personality" primaryText="something" />
            <MenuItem value={4} label="Personality" primaryText="something" />
          </DropDownMenu>
          <DropDownMenu
            value={this.state.valueSet3}
            onChange={this._handleChange3}
            style={{ maxWidth: 250, margin: 20 }}
          >
            <MenuItem value={1} label="Personality" primaryText="something" />
            <MenuItem value={2} label="Personality" primaryText="something" />
            <MenuItem value={3} label="Personality" primaryText="something" />
            <MenuItem value={4} label="Personality" primaryText="something" />
          </DropDownMenu>
          <RaisedButton label="GO" style={{ maxWidth: 250, margin: 20 }} />
        </div>
      </Paper>
    );
  }
}
