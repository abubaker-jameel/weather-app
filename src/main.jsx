import React from "react";
import ReactDOM from "react-dom/client";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { throttle } from "lodash";
import { saveState } from "./localStorage";

store.subscribe(
  throttle(() => {
    saveState({
      weather: store.getState().weather,
      favorite: store.getState().favorite,
    });
  }, 1000)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
