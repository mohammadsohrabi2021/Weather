import React from "react";
import { RouterProvider } from 'react-router-dom'
import router from "./routes/routes";
import './App.css'
import { ThemeProvider } from "@mui/material";
import theme from "./Theme/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
