import React from "react";
import Paper from "material-ui/Paper";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";

export default class MenteeFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valueSet1: 1, valueSet2: 1, valueSet3: 1 };
  }
  render() {
    return (
      <Paper zdepth={2} style={{ minWidth: 500, maxWidth: 500, margin: 40 }}>
        <h1 style={{ display: "flex", justifyContent: "center" }}>Mentee</h1>
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
          <p>Personality</p>
          <DropDownMenu
            id="personality"
            value={this.state.valueSet1}
            style={{ maxWidth: 250, margin: 20 }}
            onChange={this._handleChange1}
          >
            <MenuItem value={1} primaryText="Introvert" />
            <MenuItem value={2} primaryText="Extrovert" />
          </DropDownMenu>
          <p>Career</p>
          <DropDownMenu
            id="career"
            value={this.state.valueSet2}
            style={{ maxWidth: 250, margin: 20 }}
            onChange={this._handleChange2}
          >
            <MenuItem value={1} primaryText="Engineering" />
            <MenuItem value={2} primaryText="Business" />
            <MenuItem value={3} primaryText="Finances" />
            <MenuItem value={4} primaryText="Real Estate" />
          </DropDownMenu>
          <p>Hobbies</p>
          <DropDownMenu
            value={this.state.valueSet3}
            onChange={this._handleChange}
            style={{ maxWidth: 250, margin: 20 }}
            onChange={this._handleChange3}
          >
            <MenuItem value={1} primaryText="Kayaking" />
            <MenuItem value={2} primaryText="Bowling" />
            <MenuItem value={3} primaryText="Fishing" />
            <MenuItem value={4} primaryText="Surfing" />
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
  _handleChange1 = (event, index, value) => {
    this.setState({ valueSet1: value });
  };

  _handleChange2 = (event, index, value) => {
    this.setState({ valueSet2: value });
  };

  _handleChange3 = (event, index, value) => {
    this.setState({ valueSet3: value });
  };
  _onSubmit = e => {
    e.preventDefault();
    const personality = e.target.personality.value;
    const career = e.target.career.value;
    const hobby = e.target.hobby.value;
    const request = Object.assign({}, career, personality, hobby);
    this.props.onSubmit(request);
  };
}
