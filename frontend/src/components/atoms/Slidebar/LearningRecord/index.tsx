import { memo, VFC } from "react";
import { Checkbox, Icon } from "semantic-ui-react";
import styles from "./index.module.css";

interface Props {
  todoTask: string;
}

export const LearningRocord: VFC<Props> = memo((props) => {
  const { todoTask } = props;
  return (
    <>
      <div className={styles.taskContainer}>
        <p className={styles.taskText}>{todoTask}</p>
        <div className={styles.taskCheckItems}>
          <div className={styles.learnningTime}>
            <input type="time" />
            学習時間
          </div>
          <div className={styles.taskCheckBox}>
            <Checkbox label="完了" />
          </div>
          <div>
            <Icon name="trash" size="large" />
          </div>
        </div>
      </div>
    </>
  );
});
