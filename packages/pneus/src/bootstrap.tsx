import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

ReactDOM.render(
  <>
    <h1>Pneus Store</h1>
    <App onSelected={(pneu) => console.log(pneu)} somentePromocoes={false} />
  </>,
  document.getElementById("root")
);
