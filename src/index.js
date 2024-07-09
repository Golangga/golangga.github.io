import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { MahasiswaProvider } from "./context/MahasiswaContext";

ReactDOM.render(
  <Provider store={store}>
    <MahasiswaProvider>
      <App />
    </MahasiswaProvider>
  </Provider>,
  document.getElementById("root")
);
