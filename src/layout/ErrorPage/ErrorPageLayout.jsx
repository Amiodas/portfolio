import React from "react";
import { Outlet } from "react-router-dom";

const ErrorPageLayout = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default ErrorPageLayout;
