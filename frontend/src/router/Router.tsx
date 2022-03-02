import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home/Home";
import { SignIn } from "../components/pages/SignIn/SignIn";
import { SignUp } from "../components/pages/SignUp/SignUp";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};
