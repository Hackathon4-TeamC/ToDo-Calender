import { memo, VFC } from "react";
import { Sidebar } from "semantic-ui-react";
import { Todo } from "../../../types/Todo";
import { MarkdownEditor } from "../../atoms/MarkdownEditor";
import { LearningRocord } from "../../atoms/Slidebar/LearningRecord";
import styles from "./index.module.css";

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  date: Date | undefined;
  studyRecodes: Todo[] | undefined;
}

export const SlideinBar: VFC<Props> = memo((props) => {
  const { visible, setVisible, date, studyRecodes } = props;

  return (
    <>
      <Sidebar
        animation="overlay"
        direction="bottom"
        icon="labeled"
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
      >
        <div className={styles.slideinContainer}>
          <div className={styles.SlideInleft}>
            <div>
              <div className={styles.lerningDayContainer}>
                <div className={styles.SlideInDay}>
                  {date ? date.getMonth() + 1 : null}月{date?.getDate()}日
                </div>
                <div className={styles.SlideInTask}>学習タスク</div>
              </div>
            </div>
            {studyRecodes?.map((record) => {
              return (
                <LearningRocord
                  todoTask={record.todo_task}
                  isDone={record.is_done}
                  learningTime={record.learning_time}
                  todoID={record.todo_id}
                />
              );
            })}
          </div>
          <div className={styles.SlideInRight}>
            <div className={styles.SlideInRecord}>今日の記録</div>
            <div className={styles.markDownEditor}>
              <MarkdownEditor />
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
});
