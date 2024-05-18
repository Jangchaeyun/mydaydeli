import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { green } from "@mui/material/colors";
import { Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen px-5">
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <Card className="box w-full lg:w-1.4 flex flex-col items-center rounded-md p-5 ">
          <TaskAltIcon sx={{ fontSize: "5rem", color: green[500] }} />
          <h1 className="py-5 text-2xl font-semibold">주문 성공!!</h1>
          <p className="py-3 text-center text-gray-400">
            주문해주셔서 감사합니다!! 맛있게 조리하여 보내드리겠습니다!!
          </p>
          <p className="py-2 text-center text-gray-200 text-lg">
            행복한 하루 보내세요😄
          </p>
          <Button
            onClick={navigate("/")}
            variant="contained"
            className="py-5"
            sx={{ margin: "1rem 0rem" }}
          >
            홈으로 돌아가기
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default PaymentSuccess;
