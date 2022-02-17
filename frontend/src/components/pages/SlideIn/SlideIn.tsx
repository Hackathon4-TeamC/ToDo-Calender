import React, { memo, VFC } from "react";
import styles from "./SlideIn.module.css"
export const SlideIn:VFC=memo(()=>{

    return(
        <>
         <div id="wrapper">
    <div id="contents">
        <h1 className={styles.hello}>hello world</h1>
        
    </div>


    </div>
        </>

    )
})
