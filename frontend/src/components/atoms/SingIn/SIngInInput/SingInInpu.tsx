import { memo, ReactNode, VFC } from "react";
import styles from "./SingInInput.module.css";

interface Props {
  type: string;
}
export const SingInInput: VFC<Props> = memo((props) => {
  const { type } = props;
  return <input className={styles.input} type={type} placeholder={type} />;
});
