import { memo, VFC } from "react";
import { CalenderSidebar } from "../../organisms/CalenderSidebar/CalenderSidebar";

export const Home: VFC = memo(() => {
  return (
    <>
      <CalenderSidebar />
    </>
  );
});
