import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import { Provider } from 'react-redux';
import "antd/dist/reset.css";
import { store } from "../shared/store/tasks";

export const start = () => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    </React.StrictMode>
  );
};
