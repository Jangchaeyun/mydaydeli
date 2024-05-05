import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Card } from "@mui/material";

const AddressCard = ({ item, showButton, handleSelectAddress }) => {
  const handleSelecxtAddress = () => {};
  return (
    <Card className="flex gap-5 w-64 p-5">
      <HomeIcon />
      <div className="space-y-3 text-gray-500">
        <h1 className="font-semibold text-lg text-white">홈</h1>
        <p>경기도 부천시 원미구 조마루로 105번길 8-8 3층</p>
        {showButton && (
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleSelecxtAddress(item)}
            style={{ fontFamily: "Ownglyph_meetme-Rg" }}
          >
            선택
          </Button>
        )}
      </div>
    </Card>
  );
};

export default AddressCard;
