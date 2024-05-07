import { Button, Card } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src="https://newsimg.sedaily.com/2023/05/06/29PH1PD9A6_1.png"
          alt=""
        />
        <div>
          <p>엽기 떡볶이</p>
          <p>14,000원</p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed">완료</Button>
      </div>
    </Card>
  );
};

export default OrderCard;
