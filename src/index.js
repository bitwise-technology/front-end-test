import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import "./reset.css";

const queryClient = new QueryClient();
const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
