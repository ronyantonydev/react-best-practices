import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);

ReactDOM.render(
  <StrictMode>
    <>
    <App />
    </>
  </StrictMode>
  ,
  document.getElementById('root')
);
