import { memo, ReactNode, VFC } from "react";
import styles from "./SingInBtn.module.css";

interface Props {
  children: string;
}
export const SingInBtn: VFC<Props> = memo((props) => {
  const { children } = props;
  return <button className={styles.btn}>{children}</button>;
});
