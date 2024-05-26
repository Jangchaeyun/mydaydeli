import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateRestaurantForm from "../AdmimComponent/CreateRestaurantForm/CreateRestaurantForm";
import Admin from "../AdmimComponent/Admin/Admin";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { restaurant } = useSelector((store) => store);

  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            !restaurant.usersRestaurant ? <CreateRestaurantForm /> : <Admin />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AdminRoute;
