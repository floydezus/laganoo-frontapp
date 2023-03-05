import { Routes as LibraryRoutes, Route } from "react-router-dom";
import React from "react";
import Home from "./screens/Home";
import OffersPage from "./screens/OffersPage";

function Routes() {
  return (
    <LibraryRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/offers' element={<OffersPage />} />
    </LibraryRoutes>
  );
}

export default Routes;
