import { ChangeEvent, memo, useState, VFC } from "react";
import { SignInSmallButton } from "../../atoms/shared/SignInSmallButton";
import { SignInInput } from "../../atoms/shared/SignInInput";
import { SignInWideButton } from "../../atoms/shared/SignInWIdeButton";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

export const SignUp: VFC = memo(() => {
  const navigate = useNavigate();
  // state
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confilmPassword, setConfilmPassword] = useState("");

  // ユーザーネームをstateにセットする
  const onChageInputUser = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  // emailをstateにセットする
  const onChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // passwordをstateにセットする
  const onChangeInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // confilmpasswordをstateにセットする
  const onChangeConfilmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfilmPassword(e.target.value);
  };

  const transitionToSignin = () => {
    navigate("/signin");
  };

  const onClickTest = () => {
    console.log("クリックしました");
  };

  return (
    <body className={styles.signupbody}>
      <div className={styles.signupcontainer}>
        <h2 className={styles.signuptxt}>SIGN UP</h2>
        <div className={styles.signupform}>
          <SignInInput
            type="text"
            placeholder="username"
            onChange={onChageInputUser}
            value={userName}
          />
          <SignInInput
            type="email"
            placeholder="emai"
            onChange={onChangeInputEmail}
            value={email}
          />
          <SignInInput
            type="password"
            placeholder="password"
            onChange={onChangeInputPassword}
            value={password}
          />
          <SignInInput
            type="password"
            placeholder="confilm password"
            onChange={onChangeConfilmPassword}
            value={confilmPassword}
          />

          <SignInWideButton onClick={onClickTest}>
            CREATE ACCOUNT
          </SignInWideButton>
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
