import React from "react";
import { Route, Routes } from "react-router-dom";

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
