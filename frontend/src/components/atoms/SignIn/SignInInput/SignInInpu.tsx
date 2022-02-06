import { memo, ReactNode, VFC } from "react";
import styles from "./SignInInput.module.css";

interface Props {
  type: string;
}
export const SignInInput: VFC<Props> = memo((props) => {
  const { type } = props;
  return <input className={styles.input} type={type} placeholder={type} />;
});
