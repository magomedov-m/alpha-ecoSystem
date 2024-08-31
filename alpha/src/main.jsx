import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { store } from "../src/redux/store.js";
import { Provider } from "react-redux";
import { store1 } from "./redux/store1.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store1}>
      <App />
  </Provider>
);
