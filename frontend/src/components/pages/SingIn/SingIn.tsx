import { memo, VFC } from "react";
import { SingInBtn } from "../../atoms/SingIn/SingInBtn/SingInBtn";
import { SingInInput } from "../../atoms/SingIn/SIngInInput/SingInInpu";
import styles from "./SingIn.module.css";

export const SingIn: VFC = memo(() => {
  return (
    <body className={styles.singinBody}>
      <div className={styles.singinCard}>
        <div className={styles.singinContainer}>
          <div>
            <h2 className={styles.singin}>SING IN</h2>
          </div>
          <div className={styles.formContainer}>
            <SingInInput type={"email"} />
            <div className={styles.underline}></div>
            <SingInInput type={"password"} />

            <div className={styles.underline}></div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.loginBtn}>LOGIN</button>
            <div className={styles.signinBtnContainer}>
              <SingInBtn>SIGN IN</SingInBtn>
              <SingInBtn>GOOGLE</SingInBtn>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
});
