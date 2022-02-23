import { memo, VFC } from "react";
import styles from "./index.module.css";

interface Props {
  type: string;
  placeholder: string;
}
export const SignInInput: VFC<Props> = memo((props) => {
  const { type, placeholder } = props;
  return (
    <input
      className={styles.signupform}
      type={type}
      name={type}
      placeholder={placeholder}
      required
    ></input>
  );
});
