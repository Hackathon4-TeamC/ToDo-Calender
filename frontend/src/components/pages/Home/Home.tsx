import { memo, useEffect, VFC } from "react";
import { CalenderSidebar } from "../../organisms/CalenderSidebar/CalenderSidebar";
import { getUsers } from "../../../api/getUser";

export const Home: VFC = memo(() => {
  //仮に作っております。🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  useEffect(() => {
    getUsers()
      .then((result) => {
        console.log("users mock", result);
      })
      .catch((err) => console.log(err));
  }, []);
  // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  return (
    <>
      <CalenderSidebar />
    </>
  );
});
