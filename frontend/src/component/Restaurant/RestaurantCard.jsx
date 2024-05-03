import { Card, Chip, IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RestaurantCard = () => {
  return (
    <Card className="w-[18rem]">
      <div
        className={`${true} ? 'cursor-pointer' : 'cursor-not-allowed' relative`}
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA4MTNfMzUg%2FMDAxNTY1NjkzNDY3MjUx.ETJRPHIOHZZ65_HImRYongCl7Z673CK_4sJZQee_EIog.NxDWJt_aElIqysJDU5VKbkejTN_TTsSzajlxYdnpU7cg.JPEG.thdud8582%2FIMG_3440.jpg&type=sc960_832"
          alt=""
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={true ? "success" : "error"}
          label={true ? "open" : "closed"}
        />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold font-lg">동대문엽기떡볶이 본점</p>
          <p className="text-gray-500 text-sm">
            동대문엽기떡볶이 본점에서 로제떡볶이 먹기
          </p>
        </div>
        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
