import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

/* COMPONENTS */
import Layout from "./Layout";
import NotFound from "./NotFound";
import CatalogContainer from "./../pages/CatalogContainer";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {!localStorage.getItem("token") ? (
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/">
              <Redirect to="/catalog" />
            </Route>
            <Route exact path="/catalog" component={CatalogContainer} />
            <Route component={NotFound} />
          </Switch>
        )}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
