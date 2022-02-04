import { memo, VFC } from "react";
import styles from "./SingIn.module.css";

export const SingIn: VFC = memo(() => {
  return (
    <>
      <div className={styles.singinCard}>
        <div className={styles.singinContainer}>
          <div>
            <h2 className={styles.singin}>SING IN</h2>
          </div>
          <div className={styles.formContainer}>
            <input
              className={styles.emailInput}
              type="email"
              placeholder="email"
            />

            <div className={styles.underline}></div>
            <input
              className={styles.passwordInput}
              type="password"
              placeholder="password"
            />

            <div className={styles.underline}></div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.loginBtn}>LOGIN</button>
            <div className={styles.signinBtnContainer}>
              <button className={styles.singInBtn}>SING IN</button>
              <button className={styles.singInBtn}>GOOGLE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
