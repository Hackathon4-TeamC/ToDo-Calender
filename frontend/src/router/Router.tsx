import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home/Home";
import { SignIn } from "../components/pages/SignIn/SignIn";
import { SlideIn } from "../components/pages/SlideIn/SlideIn";
import { SignUp } from "../components/pages/SignUp/SignUp";
import { Calendar } from "../components/pages/Calendar/Calendar";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/slidein" element={<SlideIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </>
  );
};
