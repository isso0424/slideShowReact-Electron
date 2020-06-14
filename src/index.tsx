import React from "react";
import ReactDOM from "react-dom";

import Electron from "electron";

const fs = Electron.remote.require("fs");

const imageDir = process.cwd() + "/public/images";
const images = fs.readdirSync(imageDir);

function App(): JSX.Element {
  return <h1>{images}</h1>;
}

ReactDOM.render(App(), document.getElementById("app"));
