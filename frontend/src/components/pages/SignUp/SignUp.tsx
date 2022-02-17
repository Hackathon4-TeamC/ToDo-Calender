import { memo, VFC } from "react";
import styles from "./SignUp.module.css";

export const SignUp: VFC = memo(() => {
    return (
        <body className={styles.SignUpBody}>
            <div className={styles.container}>
                <a className={styles.signuptxt}>SIGN UP</a>
                <div className={styles.signUpform}>
                    <input className={`${styles.form} ${styles.email}`} type="email" name="mail" placeholder="email" required></input>
                    <input className={`${styles.form} ${styles.pass}`} type="password" name="pass" placeholder="password" id="pass" required></input>
                    <input className={`${styles.form} ${styles.pass2}`} type="password" name="pass2" placeholder="confirm password" id="pass2" required></input>
                
                    <a href="#" className={`${styles.form} ${styles.CreateAccount}`}>CREATE ACCOUNT</a>
                    <a href="#" className={`${styles.form} ${styles.SignInBtn}`}>GOOGLE</a>
                </div>
            </div>
                    
        </body>);
})