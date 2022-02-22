import { memo, useEffect, VFC } from "react";
import styles from "./Home.module.css";
import { CalenderSidebar } from "../../organisms/CalenderSidebar/CalenderSidebar";
import { getUsers } from "../../../api/getUser";

export const Home: VFC = memo(() => {
  // test🔥🔥🔥🔥🔥🔥🔥🔥
  useEffect(() => {
    getUsers()
      .then((result) => {
        console.log("# users", result);
      })
      .catch((err) => console.log(err));
  }, []);
  // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  return (
    <>
      <CalenderSidebar />
    </>
  );
});
