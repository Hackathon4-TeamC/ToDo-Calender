import { memo, VFC } from "react";
import styles from "./index.module.css";

interface Props {
  children: string;
}

export const SignInSmallButton: VFC<Props> = memo((props) => {
  const { children } = props;
  return <button className={styles.smallButton}>{children}</button>;
});
