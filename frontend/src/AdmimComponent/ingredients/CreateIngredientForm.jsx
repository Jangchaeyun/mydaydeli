import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createIngredient } from "../../component/State/Ingredients/Action";

const CreateIngredientForm = () => {
  const { restaurant, ingredients } = useSelector((store) => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const [formData, setFormData] = useState({
    name: "",
    categoryId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      restaurantId: restaurant.usersRestaurant.id,
    };
    dispatch(createIngredient({ data, jwt }));
    console.log(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          세부메뉴 만들기
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="세부메뉴"
                variant="outlined"
                onChange={handleInputChange}
                value={formData.name}
                InputProps={{
                  style: {
                    fontFamily: "Ownglyph_meetme-Rg",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "Ownglyph_meetme-Rg",
                  },
                }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  세부메뉴 카테고리
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.ingredientCategoryId}
                  label="카테고리"
                  onChange={handleInputChange}
                  name="categoryId"
                  sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                >
                  {ingredients.category.map((item) => (
                    <MenuItem
                      value={item.id}
                      sx={{ fontFamily: "Ownglyph_meetme-Rg" }}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            style={{ fontFamily: "Ownglyph_meetme-Rg" }}
            variant="contained"
            type="submit"
          >
            세부 메뉴 만들기
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientForm;
