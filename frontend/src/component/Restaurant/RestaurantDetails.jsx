import { Grid } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const RestaurantDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          홈 / 분식 / 떡볶이 / 동대문 엽기떡볶이 본점
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160923_167%2Fbooki0923_1474593200309Q9xC5_JPEG%2F0.jpg&type=sc960_832"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MDJfMTE1%2FMDAxNjgzMDE0MTIwMjcx.oYQXOv_yFxTCP6O2k_woJgfD96BH8LE9fCEEUDWEEM4g.pA_eFCBu9qgPlmcfP7Q6lGTFHClfDkXGVkrLzK1mV3cg.JPEG.19976415%2F20230325%25A3%25DF163528.jpg&type=sc960_832"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAzMjBfNTYg%2FMDAxNTg0NjcwNjEzODMw.bm3Zds0q44ujjtNCS7rj9JilXghv3fT6Nwh_y6OLUz0g.HXJvS0fczeugpEpO71NdulcFE1vwhooZezlC5koMHkUg.JPEG.gogi1017%2F81548B86-2E9B-4128-91B1-7BB72C18F337.jpg&type=sc960_832"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">동대문 엽기떡볶이 본점</h1>
          <p className="text-gray-500 mt-1">
            맛있게 매콤한 동대문엽기떡볶이 본점(배달/포장) 매장입니다.
            감사합니다.
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>서울 중구 다산로 265 럭키프라자 1층</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>월~일: 오전11시 ~ 오후6시 (오늘)</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
