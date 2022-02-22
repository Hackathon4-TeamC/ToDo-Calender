import { memo, VFC } from "react";
import styles from "./Home.module.css";
import { CalenderSidebar } from "../../organisms/CalenderSidebar/CalenderSidebar";

export const Home: VFC = memo(() => {
  return (
    <>
      <CalenderSidebar />
    </>
  );
});
