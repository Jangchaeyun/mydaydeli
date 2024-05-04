import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";

const categories = ["떡볶이", "닭발", "밀키트", "밥", "튀김"];

const foodTypes = [
  { label: "모두", value: "all", font: "Ownglyph_meetme-Rg" },
  { label: "메인메뉴", value: "mainmenu", font: "Ownglyph_meetme-Rg" },
  { label: "엽기닭발메뉴", value: "chickenfeet", font: "Ownglyph_meetme-Rg" },
  { label: "밀키트", value: "mealkit", font: "Ownglyph_meetme-Rg" },
  { label: "사이드", value: "side", font: "Ownglyph_meetme-Rg" },
  { label: "음료", value: "beverage", font: "Ownglyph_meetme-Rg" },
];

const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");

  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };

  const menu = [1, 1, 1, 1, 1, 1, 1];

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
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography
                fontFamily={"Ownglyph_meetme-Rg"}
                variant="h5"
                sx={{ paddingBottom: "1rem" }}
              >
                음식 타입
              </Typography>
              <FormControl
                className="py-10 space-y-5 font"
                component={"fieldset"}
              >
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                      fontFamily={"Ownglyph_meetme-Rg"}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography
                fontFamily={"Ownglyph_meetme-Rg"}
                variant="h5"
                sx={{ paddingBottom: "1rem" }}
              >
                음식 카테고리
              </Typography>
              <FormControl
                className="py-10 space-y-5 font"
                component={"fieldset"}
              >
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.map((item) => (
            <MenuCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
