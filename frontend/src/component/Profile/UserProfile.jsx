import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";

const UserProfile = () => {
  const handleNavigate = () => {};
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <div className="flex flex-col items-center justify-center">
        <AccountCircleIcon sx={{ fontSize: "9rem" }} />
        <h1 className="py-5 text-2xl">My Love Day6</h1>
        <p>이메일: zzangsally@gmail.com</p>
        <Button
          onClick={handleNavigate()}
          variant="contained"
          sx={{ margin: "2rem 0rem" }}
          style={{ fontFamily: "Ownglyph_meetme-Rg" }}
        >
          로그아웃
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
