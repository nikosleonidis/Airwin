import React from "react";
import ReactDOM from "react-dom";
import App from "./appJS/App";

const elem = React.createElement;

ReactDOM.render(elem(App, null), document.getElementById("root"));

// reportWebVitals();
