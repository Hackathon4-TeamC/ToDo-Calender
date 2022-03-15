import { useContext, useEffect, useState, VFC } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { SlideinBar } from "../../molecules/SlideInbar/index";
import { Todo } from "../../../types/Todo";
import { getIsDoneDailyTodos, getUserTodoList } from "../../../api/todoRequest";
import { UserContext } from "../../../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { Loader } from "semantic-ui-react";

export interface CalendarDrawing {
  title: string;
  date: string;
  todoId: number;
}

export const Calendar: VFC = () => {
  // state
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState<Date>();
  const [dailyTodo, setDailyTodo] = useState<Todo[]>();
  const [calendarDrawing, setCalendarDrawing] = useState<CalendarDrawing[]>();
  const [isLoading, setIsLoading] = useState(false);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    if (!userData?.user_id) {
      navigate("/signin");
      return;
    }
    setIsLoading(true);
    getUserTodoList(userData?.user_id)
      .then((result) => {
        if (result) {
          convertingCalendarDrawingData(result);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userData]);

  const convertingCalendarDrawingData = (todoDatas: Todo[]) => {
    const saveData: CalendarDrawing[] = [];
    todoDatas.forEach((todo) => {
      const learningTime = todo.learning_time.substring(0, 5);
      saveData.push({
        title: `${todo.todo_task} | ${learningTime}`,
        date: String(todo.execution_date),
        todoId: todo.todo_id,
      });
    });
    setCalendarDrawing(saveData);
  };

  /**
   * 指定した日付の時間を取得
   * 日付を引数にしてバックエンドから学習記録を取得

   */
  const dateClick = (info: DateClickArg) => {
    setDate(info.date);
    getIsDoneDailyTodos(info.date, userData?.user_id as number)
      .then((result) => {
        if (result) {
          setVisible(true);
          setDailyTodo(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadingStyle = {
    marginTop: "300px",
  };

  return (
    <div>
      {isLoading ? (
        <Loader active inline="centered" style={loadingStyle}>
          Loading
        </Loader>
      ) : (
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          contentHeight={"90vh"}
          dateClick={dateClick}
          events={calendarDrawing}
          displayEventTime={false}
        />
      )}

      <SlideinBar
        visible={visible}
        setVisible={setVisible}
        date={date}
        todos={dailyTodo}
        setCalendarDrawing={setCalendarDrawing}
        calendarDrawing={calendarDrawing}
      />
    </div>
  );
};
