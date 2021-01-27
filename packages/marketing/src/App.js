import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <Router>
      <StylesProvider>
        <Route exact path="/pricing" component={Pricing} />
        <Route path="/" component={Landing} />
      </StylesProvider>
    </Router>
  );
};

export default App;
