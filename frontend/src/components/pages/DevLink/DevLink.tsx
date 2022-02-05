import { memo, VFC } from "react";
import { Link } from "react-router-dom";
import styled from "./DevLink.module.css";

export const DevLink: VFC = memo(() => {
  return (
    <div className={styled.home}>
      <Link to="singin">singin</Link>
    </div>
  );
});
