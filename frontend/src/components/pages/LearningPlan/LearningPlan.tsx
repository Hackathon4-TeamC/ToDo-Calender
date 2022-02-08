import React from 'react';
import styles from "./LearningPlan.module.css"

export const LearningPlan = () => {
  return ( <div className={styles.PlanModal}>
      <div className={styles.TitleBar}>
        <h2>新規学習計画作成</h2>
        <button>×</button>
      </div>
      <div className={styles.PlanBody}>
        <div className={styles.PlanName}>
          <div><label>学習計画名</label><br /><input type="text" /></div>
        </div>
       <div className={styles.PlanStartEnd}>
          <div><label>開始</label><br /><input type="date" /></div>
          <div><label>終了</label><br /><input type="date" /></div>
       </div>
       <div className={styles.PlanWeekHour}>
          <div><label>実施曜日</label><br /><input type="text" /></div>
          <div><label>学習時間</label><br /><input type="time" /></div>
        </div>
        <button>学習計画を追加</button>
      </div>
      </div>);
};
