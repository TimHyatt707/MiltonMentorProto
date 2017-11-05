import React, { Component } from "react";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MentoringPage from "./components/MentoringPage";
import SuccessPage from "./components/SuccessPage";
import MatchesPage from "./components/MatchesPage";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import matcher from "./components/MatchesPageComponents/utils/matcher";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] };
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={MentoringPage} />
              <Route
                exact
                path="/success"
                render={routeProps => (
                  <SuccessPage
                    {...routeProps}
                    onSubmitRequest={this.onSubmitRequest}
                  />
                )}
              />
              <Route
                exact
                path="/matches"
                render={routeProps => (
                  <MatchesPage {...routeProps} matches={this.state.matches} />
                )}
              />
              <Route exact path="/congratulations" />
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
  onSubmitRequest = request => {
    const results = matcher(request);
    console.log(request);
    this.setState({ matches: results });
  };
}

export default App;
