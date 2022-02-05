import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { DevLink } from "./components/pages/DevLink/DevLink";

import { SingIn } from "./components/pages/SingIn/SingIn";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DevLink />} />
        <Route path="/singin" element={<SingIn />} />
      </Routes>
    </>
  );
};
