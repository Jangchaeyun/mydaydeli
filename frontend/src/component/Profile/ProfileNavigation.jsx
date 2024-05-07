import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const menu = [
  { title: "주문목록", icon: <ShoppingBagIcon />, navigate: "orders" },
  { title: "즐겨찾기", icon: <FavoriteIcon />, navigate: "favorites" },
  { title: "주소", icon: <HomeIcon />, navigate: "address" },
  { title: "결제", icon: <AccountBalanceWalletIcon />, navigate: "payment" },
  {
    title: "알림",
    icon: <NotificationsActiveIcon />,
    navigate: "notification",
  },
  { title: "이벤트", icon: <EventIcon />, navigate: "events" },
  { title: "로그아웃", icon: <LogoutIcon />, navigate: "" },
];
const ProfileNavigation = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate(`/my-profile/${item.navigate}`);
  };
  return (
    <div>
      <Drawer
        variant={"permanent"}
        onClose={handleClose}
        open={isSmallScreen ? open : "permanent"}
        anchor="left"
        sx={{ zIndex: -1, position: "sticky" }}
      >
        <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl pt-16 gap-8">
          {menu.map((item, i) => (
            <>
              <div
                onClick={() => handleNavigate(item)}
                className="px-5 flex items-center space-x-5"
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider />}
            </>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default ProfileNavigation;
