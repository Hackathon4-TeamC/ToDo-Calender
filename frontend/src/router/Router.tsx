import React from "react";
import { Route, Routes } from "react-router-dom";
import { DevLink } from "../components/pages/DevLink/DevLink";
import { Home } from "../components/pages/Home/Home";
import { SingIn } from "../components/pages/SingIn/SingIn";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DevLink />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};
