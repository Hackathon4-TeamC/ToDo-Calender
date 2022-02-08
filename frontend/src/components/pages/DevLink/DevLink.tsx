import { memo, VFC } from "react";
import { Link } from "react-router-dom";
import styled from "./DevLink.module.css";

export const DevLink: VFC = memo(() => {
  return (
    <div className={styled.link}>
      <Link to="SignIn">signIn</Link>
      <br />
      <Link to="home">home</Link>
      <br />
      <Link to="LearningPlan">LearningPlan</Link>
    </div>
  );
});
