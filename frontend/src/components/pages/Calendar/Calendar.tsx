import { memo, useState, VFC } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { SlideInBottombar } from "../../organisms/SlideInBottombar";

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

      <SlideInBottombar
        visible={visible}
        setVisible={setVisible}
        dateStr={dateStr}
      />
    </div>
  );
});
