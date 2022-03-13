import { useContext, useState, VFC } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { SlideinBar } from "../../molecules/SlideInbar/index";
import { Todo } from "../../../types/Todo";
import { getDailyTodos } from "../../../api/todoRequest";
import { UserContext } from "../../../providers/UserProvider";

export const Calendar: VFC = () => {
  // state
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState<Date>();
  const [studyRecodes, setStudyRecords] = useState<Todo[]>();
  const { userData } = useContext(UserContext);

  /**
   * 指定した日付の時間を取得
   * 日付を引数にしてバックエンドから学習記録を取得

   */
  const dateClick = (info: DateClickArg) => {
    setVisible(true);
    setDate(info.date);
    getDailyTodos(info.date, userData?.user_id as number)
      .then((result) => {
        if (result) {
          setStudyRecords(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        contentHeight={"90vh"}
        dateClick={dateClick}
      />

      <SlideinBar
        visible={visible}
        setVisible={setVisible}
        date={date}
        studyRecodes={studyRecodes}
      />
    </div>
  );
};
