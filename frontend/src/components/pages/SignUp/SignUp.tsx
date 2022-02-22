import { memo, VFC } from "react";
import styles from "./SignUp.module.css";

export const SignUp: VFC = memo(() => {
    return (
        <body className={styles.signupbody}>
            <div className={styles.signupcontainer}>
                <h2 className={styles.signuptxt}>SIGN UP</h2>
                <div className={styles.signupform}>
                    <input className={`${styles.signupform} ${styles.name}`} type="text" name="name" placeholder="username" required></input>
                    <input className={`${styles.signupform} ${styles.email}`} type="email" name="mail" placeholder="email" required></input>
                    <input className={`${styles.signupform} ${styles.pass}`} type="password" name="pass" placeholder="password" id="pass" required></input>
                    <input className={`${styles.signupform} ${styles.pass2}`} type="password" name="pass2" placeholder="confirm password" id="pass2" required></input>
                
                    <button className={`${styles.signupbtn} ${styles.createaccount}`}>CREATE ACCOUNT</button>
                    <button className={`${styles.signupbtn} ${styles.signin}`}>SIGN IN</button>
                    <button className={`${styles.signupbtn} ${styles.google}`}>GOOGLE</button>
                </div>
            </div>
                    
        </body>);
})