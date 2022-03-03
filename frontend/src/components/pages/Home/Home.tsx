import { useContext, useEffect, VFC } from "react";
import styles from "./Home.module.css";
import { CalenderSidebar } from "../../molecules/CalenderSidebar/CalenderSidebar";
import { UserContext } from "../../../providers/UserProvider";
import { getMyUserData } from "../../../api/userRequest";
import { Calendar } from "../../organisms/Calendar/Calendar";

export const Home: VFC = () => {
  //  グローバルstate
  const { setUserData } = useContext(UserContext);
  /**
   * ローカルストレージにtokenが入っているか確認
   * tokenがあればユーザー情報再取得
   */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    getMyUserData(token)
      .then((result) => {
        setUserData(result);
        console.log(result);
      })
      .catch((err) => console.log(err));
  }, []);
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
