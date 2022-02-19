import { memo, VFC } from "react";
import styles from "./SignUp.module.css";

export const SignUp: VFC = memo(() => {
    return (
        <body className={styles.body}>
            <div className={styles.container}>
                <a className={styles.signuptxt}>SIGN UP</a>
                <div className={styles.signupform}>
                    <input className={`${styles.form} ${styles.name}`} type="text" name="name" placeholder="username" required></input>
                    <input className={`${styles.form} ${styles.email}`} type="email" name="mail" placeholder="email" required></input>
                    <input className={`${styles.form} ${styles.pass}`} type="password" name="pass" placeholder="password" id="pass" required></input>
                    <input className={`${styles.form} ${styles.pass2}`} type="password" name="pass2" placeholder="confirm password" id="pass2" required></input>
                
                    <a href="#" className={`${styles.btn} ${styles.createaccount}`}>CREATE ACCOUNT</a>
                    <a href="#" className={`${styles.btn} ${styles.signin}`}>SIGN IN</a>
                    <a href="#" className={`${styles.btn} ${styles.google}`}>GOOGLE</a>
                </div>
            </div>
                    
        </body>);
})