import { memo, useState, VFC } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { SlideinBar } from "../../organisms/SlideInbar/index";

export const Calendar: VFC = memo(() => {
  // state
  const [visible, setVisible] = useState(false);
  const [dateStr, setDate] = useState<string>();

  const dateClick = (info: DateClickArg) => {
    console.log("クリックしたよ", info.dateStr);
    setVisible(true);
    setDate(info.dateStr);
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

      <SlideinBar visible={visible} setVisible={setVisible} dateStr={dateStr} />
    </div>
  );
});
