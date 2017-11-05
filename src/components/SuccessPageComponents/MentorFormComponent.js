import React from "react";
import Paper from "material-ui/Paper";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";

export default class MentorFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valueSet1: 1, valueSet2: 1, valueSet3: 1 };
  }
  render() {
    return (
      <Paper zdepth={2} style={{ minWidth: 500, maxWidth: 500, margin: 40 }}>
        <h1 style={{ display: "flex", justifyContent: "center" }}>Mentor</h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "spaceAround"
          }}
          onSubmit={this._onSubmit}
        >
          <DropDownMenu
            id="personality"
            value={this.state.valueSet1}
            style={{ maxWidth: 250, margin: 20 }}
            onChange={this._handleChange}
          >
            <MenuItem value={1} label="Personality" primaryText="Introvert" />
            <MenuItem value={2} label="Personality" primaryText="Extrovert" />
          </DropDownMenu>
          <DropDownMenu
            id="career"
            value={this.state.valueSet2}
            style={{ maxWidth: 250, margin: 20 }}
            onChange={this._handleChange}
          >
            <MenuItem
              value={1}
              label="Career Field"
              primaryText="Engineering"
            />
            <MenuItem value={2} label="Career Field" primaryText="Business" />
            <MenuItem value={3} label="Career Field" primaryText="Finances" />
            <MenuItem
              value={4}
              label="Career Field"
              primaryText="Real Estate"
            />
          </DropDownMenu>
          <DropDownMenu
            value={this.state.valueSet3}
            onChange={this._handleChange}
            style={{ maxWidth: 250, margin: 20 }}
            onChange={this._handleChange}
          >
            <MenuItem value={1} label="Hobbies" primaryText="Kayaking" />
            <MenuItem value={2} label="Hobbies" primaryText="Bowling" />
            <MenuItem value={3} label="Hobbies" primaryText="Fishing" />
            <MenuItem value={4} label="Hobbies" primaryText="Surfing" />
          </DropDownMenu>
          <Link to="/matches">
            <RaisedButton
              label="GO"
              type="submit"
              style={{ maxWidth: 250, margin: 20 }}
            />
          </Link>
        </form>
      </Paper>
    );
  }
  _handleChange = (event, index, value) => {
    this.setState({ value });
  };
  _onSubmit = e => {
    e.preventDefault();
    const personality = e.target.personality.value;
    const career = e.target.career.value;
    const hobby = e.target.hobby.value;
    const request = Object.assign({}, career, personality, hobby);
    console.log(request);
    this.props.onSubmit(request);
  };
}
