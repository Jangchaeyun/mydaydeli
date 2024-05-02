import "./App.css";
import { ThemeProvider } from "@emotion/react";
import Navbar from "./component/NavBar/Navbar";
import { darkTheme } from "./Theme/DarkTheme";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
