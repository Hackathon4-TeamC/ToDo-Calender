import React, { memo, VFC } from "react";
import styles from "./SlideIn.module.css"

export const SlideIn: VFC = memo(() => {

    return(
     <>
     <div className={styles.SlideInright}>
      
     <div className={styles.SlideInRecord}>今日の記録</div>
     
  </div>     
        <div className={styles.SlideInleft}> 
          <div className={styles.SlideInDay}>1月14日</div>
          <div className={styles.SlideInTask}>学習タスク</div>

        </div>
     
        
     
      
        
   </>   

    )
})