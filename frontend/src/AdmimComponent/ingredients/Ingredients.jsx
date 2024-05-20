import React from "react";
import IngredientsTable from "./IngredientsTable";
import { Grid } from "@mui/material";
import IngredientCategoryTable from "./IngredientCategory";

const Ingredients = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <IngredientsTable />
        </Grid>
        <Grid item xs={12} lg={4}>
          <IngredientCategoryTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default Ingredients;
