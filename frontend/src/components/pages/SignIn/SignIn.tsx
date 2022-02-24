import { ChangeEvent, memo, useContext, useState, VFC } from "react";
import styles from "./SignIn.module.css";
import { useNavigate } from "react-router-dom";
import { SignInSmallButton } from "../../atoms/shared/SignInSmallButton";
import { SignInInput } from "../../atoms/shared/SignInInput";
import { SignInWideButton } from "../../atoms/shared/SignInWIdeButton";
import { postLoginUser } from "../../../api/userRequest";
import { UserContext } from "../../../providers/UserProvider";

export const SignIn: VFC = memo(() => {
  const navigate = useNavigate();
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //  グローバルなstate
  const { setUserData } = useContext(UserContext);

  // emailの値をstateにセットする
  const onChangeEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  // passwordの値をstateにセットする
  const onChangePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  /**
   * signinボタンを押してバックエンドにサインインのリクエストを送る
   * 正常に処理された場合,userDataに情報を保存、/homeへ遷移する
   * emailとpasswordが空の場合は発火されない
   */
  const onClickSignin = () => {
    if (!email && !password) {
      return;
    }
    postLoginUser(email, password)
      .then((result) => {
        if (result) {
          setUserData(result);
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  const transitionToSignup = () => {
    navigate("/signup");
  };
  return (
    <body className={styles.signupbody}>
      <div className={styles.signupcontainer}>
        <h2 className={styles.signuptxt}>SIGN IN</h2>
        <div className={styles.signupform}>
          <SignInInput
            type="email"
            placeholder="email"
            onChange={onChangeEmailInput}
            value={email}
          />
          <p className={styles.inputMargin}></p>
          <SignInInput
            type="password"
            placeholder="password"
            onChange={onChangePasswordInput}
            value={password}
          />
          <div className={styles.buttonContainer}>
            <SignInWideButton onClick={onClickSignin}>SIGN IN</SignInWideButton>
            <div className={styles.smallButtonContainer}>
              <SignInSmallButton onClick={transitionToSignup}>
                SIGN UP
              </SignInSmallButton>
              <SignInSmallButton onClick={transitionToSignup}>
                GOOGLE
              </SignInSmallButton>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
});
