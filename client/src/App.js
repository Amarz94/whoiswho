import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
//import Auth from "aws-amplify";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch"

function App() {
  return (
    <Router>
      <div>
        <Switch>                    
          <Route exact path="/" >
            <AmplifySignOut />
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
