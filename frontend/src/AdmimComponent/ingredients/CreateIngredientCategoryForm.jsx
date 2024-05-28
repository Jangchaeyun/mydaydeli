import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { createIngredientCategory } from "../../component/State/Ingredients/Action";
import { useDispatch, useSelector } from "react-redux";

const CreateIngredientCategoryForm = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector((store) => store);
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      restaurantId: restaurant.usersRestaurant.id,
    };
    console.log(formData);
    dispatch(createIngredientCategory({ data, jwt }));
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
          세부메뉴 카테고리 만들기
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="세부메뉴 카테고리"
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
          </Grid>
          <Button
            style={{ fontFamily: "Ownglyph_meetme-Rg" }}
            variant="contained"
            type="submit"
          >
            세부메뉴 카테고리 만들기
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientCategoryForm;
