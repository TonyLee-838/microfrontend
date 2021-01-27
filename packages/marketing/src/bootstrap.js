import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

//mount function to start up the entire app.
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//If (1) We are in development environment,
// and (2) We are test this out in isolation"
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) mount(devRoot);
}

export { mount };
