import { memo, VFC } from "react";
import { SignInSmallButton } from "../../atoms/shared/SignInSmallButton";
import { SignInInput } from "../../atoms/shared/SignInInput";
import styles from "./SignIn.module.css";
import { SignInWideButton } from "../../atoms/shared/SignInWIdeButton";

export const SignIn: VFC = memo(() => {
  return (
    <body className={styles.signupbody}>
      <div className={styles.signupcontainer}>
        <h2 className={styles.signuptxt}>SIGN IN</h2>
        <div className={styles.signupform}>
          <SignInInput type="email" placeholder="email" />
          <p className={styles.inputMargin}></p>
          <SignInInput type="password" placeholder="password" />
          <div className={styles.buttonContainer}>
            <SignInWideButton>SIGN IN</SignInWideButton>
            <div className={styles.smallButtonContainer}>
              <SignInSmallButton>SIGN UP</SignInSmallButton>
              <SignInSmallButton>GOOGLE</SignInSmallButton>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
});
