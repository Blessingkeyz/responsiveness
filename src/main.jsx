import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.jsx";

import "./index.css";

const colors = {
  brand: {
    900: "#024fc9",
    800: "#146af5",
    700: "#2977f2",
  },
};

// const fonts = {
//   body: "Tahoma",
//   heading: "courier New",
// };

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
