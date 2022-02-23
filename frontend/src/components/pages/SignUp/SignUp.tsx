import { memo, VFC } from "react";
import { SignInSmallButton } from "../../atoms/shared/SignInSmallButton";
import { SignInInput } from "../../atoms/shared/SignInInput";
import styles from "./SignUp.module.css";
import { SignInWideButton } from "../../atoms/shared/SignInWIdeButton";

export const SignUp: VFC = memo(() => {
  return (
    <body className={styles.signupbody}>
      <div className={styles.signupcontainer}>
        <h2 className={styles.signuptxt}>SIGN UP</h2>
        <div className={styles.signupform}>
          <SignInInput type="text" placeholder="username" />
          <SignInInput type="email" placeholder="emai" />
          <SignInInput type="password" placeholder="password" />
          <SignInInput type="password" placeholder="confilm password" />

          <SignInWideButton>CREATE ACCOUNT</SignInWideButton>
          <div>
            <SignInSmallButton>SIGN IN</SignInSmallButton>
            <SignInSmallButton>GOOGLE</SignInSmallButton>
          </div>
        </div>
      </div>
    </body>
  );
});
