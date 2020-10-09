import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

ReactDOM.render(
  <>
    <h1>Acessórios Store</h1>
    <App onSelected={(acessorio) => console.log(acessorio)} somentePromocoes={false} />
  </>,
  document.getElementById("root")
);
