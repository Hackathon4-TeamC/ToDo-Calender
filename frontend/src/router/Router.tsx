import React from "react";
import { Route, Routes } from "react-router-dom";
import { DevLink } from "../components/pages/DevLink/DevLink";
import { Home } from "../components/pages/Home/Home";
import { SignIn } from "../components/pages/SignIn/SignIn";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DevLink />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};
