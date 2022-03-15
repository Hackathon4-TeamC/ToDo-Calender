import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import { Checkbox, Icon } from "semantic-ui-react";
import { putLearningPlan } from "../../../../api/todoRequest";
import { Todo } from "../../../../types/Todo";
import { CalendarDrawing } from "../../../organisms/Calendar/Calendar";
import styles from "./index.module.css";

interface Props {
  todoData: Todo;
  setCalendarDrawing: React.Dispatch<
    React.SetStateAction<CalendarDrawing[] | undefined>
  >;
  calendarDrawing: CalendarDrawing[] | undefined;
}

export const LearningRocord: VFC<Props> = memo((props) => {
  const { todoData, setCalendarDrawing, calendarDrawing } = props;
  const [todo, setTodo] = useState<Todo>(todoData);

  useEffect(() => {
    setTodo(todoData);
  }, [todoData]);

  // 学習時間
  const onChangeInputTime = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo((state) => ({ ...state, learning_time: e.target.value }));
  };
  // チェックボックスの変更
  const onClickCheckBox = () => {
    const isDone = todo.is_done ? false : true;
    putLearningPlan(todo, isDone)
      .then((result) => {
        if (result) {
          drawingItemToCalendar(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // isdoneのbooleanを確認して、trueの場合カレンダーに表示処理,falseの場合カレンダーから削除する
  const drawingItemToCalendar = (todo: Todo) => {
    if (todo.is_done) {
      setTodo((state) => ({ ...state, is_done: todo.is_done }));
      const learningTime = todo.learning_time.substring(0, 5);
      const saveData: CalendarDrawing = {
        title: `${todo.todo_task} | ${learningTime}`,
        date: String(todo.execution_date),
        todoId: todo.todo_id,
      };
      if (calendarDrawing) {
        setCalendarDrawing([...calendarDrawing, saveData]);
      } else {
        // もし登録が初回だった場合
        setCalendarDrawing([saveData]);
      }
    } else {
      const saveData = calendarDrawing?.filter(
        (data) => data.todoId !== todo.todo_id
      );
      setTodo((state) => ({ ...state, is_done: todo.is_done }));
      setCalendarDrawing(saveData);
    }
  };

  return (
    <>
      <div className={styles.taskContainer}>
        <p className={styles.taskText}>{todo.todo_task}</p>
        <div className={styles.taskCheckItems}>
          <div className={styles.learnningTime}>
            <input
              type="time"
              value={todo.learning_time}
              onChange={onChangeInputTime}
            />
            学習時間
          </div>
          <div className={styles.taskCheckBox}>
            <Checkbox
              label="完了"
              checked={todo.is_done}
              onClick={onClickCheckBox}
            />
          </div>
          <div>
            <Icon name="trash" size="large" />
          </div>
        </div>
      </div>
    </>
  );
});
