import { memo, VFC } from "react";
import { Sidebar } from "semantic-ui-react";
import { Todo } from "../../../types/Todo";
import { MarkdownEditor } from "../../atoms/MarkdownEditor";
import { LearningRocord } from "../../atoms/Slidebar/LearningRecord";
import { CalendarDrawing } from "../../organisms/Calendar/Calendar";
import styles from "./index.module.css";

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  date: Date | undefined;
  todos: Todo[] | undefined;
  setCalendarDrawing: React.Dispatch<
    React.SetStateAction<CalendarDrawing[] | undefined>
  >;
  calendarDrawing: CalendarDrawing[] | undefined;
}

export const SlideinBar: VFC<Props> = memo((props) => {
  const {
    visible,
    setVisible,
    date,
    todos,
    setCalendarDrawing,
    calendarDrawing,
  } = props;

  return (
    <>
      <Sidebar
        animation="overlay"
        direction="bottom"
        icon="labeled"
        onHide={() => setVisible(false)}
        vertical={true}
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
            {todos?.map((todo) => {
              return (
                <LearningRocord
                  key={todo.todo_id}
                  todoData={todo}
                  setCalendarDrawing={setCalendarDrawing}
                  calendarDrawing={calendarDrawing}
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
