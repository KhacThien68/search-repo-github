import React from "react";
import { Route, Routes } from "react-router-dom";
import { PUBLIC_ROUTERS } from ".";

const RenderRoute = () => {
  return (
    <Routes>
      {PUBLIC_ROUTERS.map((route, ps) => (
        <Route path={route.path} element={<route.element />} key={ps} />
      ))}
    </Routes>
  );
};

export default RenderRoute;
