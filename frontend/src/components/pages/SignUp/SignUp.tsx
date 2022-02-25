import { ChangeEvent, memo, useState, VFC } from "react";
import { SignInSmallButton } from "../../atoms/shared/SignInSmallButton";
import { SignInInput } from "../../atoms/shared/SignInInput";
import { SignInWideButton } from "../../atoms/shared/SignInWIdeButton";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

export const SignUp: VFC = memo(() => {
  const navigate = useNavigate();
  const transitionToSignin = () => {
    navigate("/signin");
  };

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
            <SignInSmallButton onClick={transitionToSignin}>
              SIGN IN
            </SignInSmallButton>
            <SignInSmallButton onClick={transitionToSignin}>
              GOOGLE
            </SignInSmallButton>
          </div>
        </div>
      </div>
    </body>
  );
});
