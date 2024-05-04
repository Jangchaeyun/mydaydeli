import "./App.css";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import Navbar from "./component/NavBar/Navbar";
import { darkTheme } from "./Theme/DarkTheme";
import { CssBaseline } from "@mui/material";
import Home from "./component/Home/Home";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails";
import Cart from "./Cart/Cart";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}
      <Cart />
    </ThemeProvider>
  );
}

export default App;
