import { useContext, useEffect, VFC } from "react";
import styles from "./Home.module.css";
import { CalenderSidebar } from "../../molecules/CalenderSidebar/CalenderSidebar";
import { UserContext } from "../../../providers/UserProvider";
import { getMyUserData } from "../../../api/userRequest";
import { Calendar } from "../../organisms/Calendar/Calendar";

export const Home: VFC = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.sidebarWrappper}>
          <CalenderSidebar />
        </div>
        <div className={styles.calendarWrapper}>
          <Calendar />
        </div>
      </div>
    </>
  );
};
