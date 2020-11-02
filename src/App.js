import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PlanetDetails from "./components/PlanetDetails";
import PlanetsList from "./components/PlanetsList";

import "semantic-ui-css/semantic.min.css";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/planets" children={<PlanetsList />} />
        <Route
          path="/planets/:id"
          render={(props) => <PlanetDetails {...props} />}
        />
        <Route exact path="/">
          <Redirect
            to={{
              pathname: "/planets",
              search: "?page=1",
            }}
          />
        </Route>
      </Switch>
    </>
  );
}
