import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, Badge, Box, TextField } from "@mui/material";
import "./Navbar.css";
import { purple } from "@mui/material/colors";
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    if (auth.user.role === "ROLE_CUSTOMER") {
      navigate("/my-profile");
    } else {
      navigate("/admin/restaurant");
    }
  };
  return (
    <Box
      sx={{ zIndex: 100 }}
      className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#8572EE] lg: lg:px-20 flex justify-between"
    >
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li
          onClick={() => navigate("/")}
          className="logo font-semibold text-gray-300 text-2xl"
        >
          mydaydeli
        </li>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton sx={{ fontSize: "1.5rem" }}>
            <SearchIcon />
          </IconButton>
        </div>
        <div className="">
          {auth.user ? (
            <Avatar
              onClick={handleAvatarClick}
              sx={{ bgcolor: "white", color: purple.A400 }}
              style={{ fontFamily: "Ownglyph_meetme-Rg", fontSize: "30px" }}
            >
              {auth.user?.fullName[0].toUpperCase()}
            </Avatar>
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
