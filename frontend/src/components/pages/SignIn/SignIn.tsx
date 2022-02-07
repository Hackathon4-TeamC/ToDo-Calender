import { memo, VFC } from "react";
import { SignInBtn } from "../../atoms/SignIn/SignInBtn/SignInBtn";
import { SignInInput } from "../../atoms/SignIn/SignInInput/SignInInput";
import styles from "./SignIn.module.css";

export const SignIn: VFC = memo(() => {
  return (
    <body className={styles.SignInBody}>
      <div className={styles.SignInCard}>
        <div className={styles.SignInContainer}>
          <div>
            <h2 className={styles.SignIn}>SIGN IN</h2>
          </div>
          <div className={styles.formContainer}>
            <SignInInput type={"email"} />
            <div className={styles.underline}></div>
            <SignInInput type={"password"} />

            <div className={styles.underline}></div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.loginBtn}>LOGIN</button>
            <div className={styles.signinBtnContainer}>
              <SignInBtn>SIGN UP</SignInBtn>
              <SignInBtn>GOOGLE</SignInBtn>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
});
