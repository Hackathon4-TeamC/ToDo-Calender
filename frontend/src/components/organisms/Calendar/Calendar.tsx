import { memo, useState, VFC } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { SlideinBar } from "../SlideInbar/index";

export const Calendar: VFC = memo(() => {
  // state
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState<Date>();

  const dateClick = (info: DateClickArg) => {
    setVisible(true);
    setDate(info.date);
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

      <SlideinBar visible={visible} setVisible={setVisible} date={date} />
    </div>
  );
});
