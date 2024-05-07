import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, Badge, Box } from "@mui/material";
import "./Navbar.css";
import { purple } from "@mui/material/colors";
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ zIndex: 100 }}
      className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#8572EE] lg: lg:px-20 flex justify-between"
    >
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li className="logo font-semibold text-gray-300 text-2xl">mydaydeli</li>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton sx={{ fontSize: "1.5rem" }}>
            <SearchIcon />
          </IconButton>
        </div>
        <div className="">
          {false ? (
            <Avatar sx={{ bgcolor: "white", color: purple.A400 }}>D</Avatar>
          ) : (
            <IconButton onClick={() => navigate("/account/login")}>
              <Person />
            </IconButton>
          )}
        </div>
        <div className="">
          <IconButton sx={{ fontSize: "1.5rem" }}>
            <Badge color="black" badgeContent={3}>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
};

export default Navbar;
