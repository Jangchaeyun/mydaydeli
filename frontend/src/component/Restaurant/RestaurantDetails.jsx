import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getRestaurantById,
  getRestaurantsCategory,
} from "../State/Restaurant/Action";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth, restaurant } = useSelector((store) => store);

  const { id } = useParams();

  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };

  console.log("restaurant", restaurant);

  useEffect(() => {
    dispatch(getRestaurantById({ jwt, restaurantId: id }));
    dispatch(getRestaurantsCategory({ jwt, restaurantId: id }));
  }, []);

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
                src={restaurant.restaurant?.images[0]}
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src={restaurant.restaurant?.images[1]}
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src={restaurant.restaurant?.images[2]}
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">
            {restaurant.restaurant?.name}
          </h1>
          <p className="text-gray-500 mt-1">
            {restaurant.restaurant?.description}
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>
                {restaurant.restaurant?.address.streetAddress +
                  " " +
                  restaurant.restaurant?.address.detailAddress}
              </span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>{restaurant.restaurant?.openingHours}</span>
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
                  {restaurant.categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item.name}
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
