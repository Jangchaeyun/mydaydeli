import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateRestaurantForm from "../AdmimComponent/CreateRestaurantForm/CreateRestaurantForm";
import Admin from "../AdmimComponent/Admin/Admin";

const AdminRoute = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={false ? <CreateRestaurantForm /> : <Admin />}
        ></Route>
      </Routes>
    </div>
  );
};

export default AdminRoute;
