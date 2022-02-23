import { memo, VFC } from "react";
import styles from "./index.module.css";

interface Props {
  children: string;
}

export const SignInWideButton: VFC<Props> = memo((props) => {
  const { children } = props;
  return <button className={styles.wideButton}>{children}</button>;
});
