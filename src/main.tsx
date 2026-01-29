import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App.tsx";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #141414;
    color: white;
    font-family: system-ui, -apple-system, sans-serif;
  }

  :focus-visible {
    outline: 2px solid #4a9eff;
    outline-offset: 2px;
  }
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);
