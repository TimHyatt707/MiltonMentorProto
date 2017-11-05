import React, { Component } from "react";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MentoringPage from "./components/MentoringPage";
import SuccessPage from "./components/SuccessPage";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={MentoringPage} />
              <Route exact path="/success" component={SuccessPage} />
              <Route exact path="/matches" />
              <Route exact path="/congratulations" />
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
