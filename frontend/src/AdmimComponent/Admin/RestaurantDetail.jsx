import { Button, Card, CardContent, CardHeader, Grid } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const RestaurantDetail = () => {
  const handleRestaurantStatus = () => {};
  return (
    <div className="lg:px-20 px-5 pb-10">
      <div className="py-5 flex justify-center items-center gap-5">
        <h1 className="text-2xl lg:text-7xl text-center font-bold p-5">
          디저트인
        </h1>
        <div>
          <Button
            color={true ? "primary" : "error"}
            className="py-[1rem] px-[2rem]"
            variant="contained"
            onClick={handleRestaurantStatus}
            size="large"
            style={{ fontFamily: "Ownglyph_meetme-Rg" }}
          >
            {true ? "마감" : "운영 중"}
          </Button>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">음식점</span>}
            ></CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">운영자</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    안진희
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">가게 이름</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    디저트인
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">음식 이름</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    디저트인
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">운영 시작시간</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    디저트인
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">상태</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {true ? (
                      <span className="px-5 py-2 rounded-full bg-green-400 text-gray-950">
                        운영중
                      </span>
                    ) : (
                      <span className="px-5 py-2 rounded-full bg-red-400 text-gray-50">
                        마감
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">주소</span>}
            ></CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">도로명 주소</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    안진희
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">상세 주소</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    디저트인
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">정보</span>}
            ></CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">이메일</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    안진희
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">전화번호</p>
                  <p className=" text-gray-400">
                    <span className="pr-5">-</span>
                    디저트인
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">SNS</p>
                  <div className="flex text-gray-400 items-center pb-3 gap-2">
                    <span className="pr-5">-</span>
                    <a href="/">
                      <InstagramIcon sx={{ fontSize: "3rem" }} />
                    </a>
                    <a href="/">
                      <XIcon sx={{ fontSize: "3rem" }} />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default RestaurantDetail;
