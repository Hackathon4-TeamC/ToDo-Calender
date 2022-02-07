import { memo, VFC } from "react";
import { Link } from "react-router-dom";
import { LearningRecordModal } from "../../organisms/LearningRecordModal/LearningRecordModal";
import styles from "./DevLink.module.css";

export const DevLink: VFC = memo(() => {
  return (
    <div className={styles.link}>
      <Link to="signin">signin</Link>
      <br />
      <Link to="home">home</Link>

      <div className={styles.modalContainer}>
        <h2>モーダル</h2>
        <LearningRecordModal />
      </div>
    </div>
  );
});
