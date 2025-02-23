import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppDemo from "./App2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppDemo />
  </StrictMode>
);
