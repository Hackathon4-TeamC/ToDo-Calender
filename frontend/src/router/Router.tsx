
   
import React from "react";
import { Route, Routes } from "react-router-dom";
import { DevLink } from "../components/pages/DevLink/DevLink";
import { Home } from "../components/pages/Home/Home";
import { SignIn } from "../components/pages/SignIn/SignIn";
import {SignUp} from "../components/pages/SignUp/SignUp"

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DevLink />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup element={<SignUp/>} />
      </Routes>
    </>
  );
};