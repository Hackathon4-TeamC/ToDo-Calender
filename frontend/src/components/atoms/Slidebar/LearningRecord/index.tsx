import { memo, VFC } from "react";
import { Checkbox, Icon } from "semantic-ui-react";
import styles from "./index.module.css";

interface Props {
  todoTask: string;
  isDone: boolean;
  learningTime: string;
  todoID: number;
}

export const LearningRocord: VFC<Props> = memo((props) => {
  const { todoTask, isDone, learningTime, todoID } = props;

  return (
    <>
      <div className={styles.taskContainer}>
        <p className={styles.taskText}>{todoTask}</p>
        <div className={styles.taskCheckItems}>
          <div className={styles.learnningTime}>
            <input type="time" value={learningTime} />
            学習時間
          </div>
          <div className={styles.taskCheckBox}>
            {isDone ? (
              <Checkbox label="完了" defaultChecked />
            ) : (
              <Checkbox label="完了" />
            )}
          </div>
          <div>
            <Icon name="trash" size="large" />
          </div>
        </div>
      </div>
    </>
  );
});
