import { memo, VFC } from "react";
import {
  SidebarPushable,
  Sidebar,
  Segment,
  Header,
  Menu,
} from "semantic-ui-react";
import { ItemName } from "../../atoms/CalenderSidebar/ItemName/ItemName";
import { PrimaryBotton } from "../../atoms/CalenderSidebar/PrimaryBotton/PrimaryBtton";
import { ToggleBotton } from "../../atoms/CalenderSidebar/ToggleBotton/ToggleBotton";
import { LearningRecordModal } from "../LearningRecordModal/LearningRecordModal";
import { NewPlanModal } from "../NewPlanModal/NewPlanModal";
import styles from "./CalenderSidebar.module.css";

export const CalenderSidebar: VFC = memo(() => {
  return (
    <div className={styles.sidebarContainer}>
      <SidebarPushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          vertical
          visible
          width="thin"
        >
          <div>
            <ItemName>学習</ItemName>
          </div>
          <div className={styles.btnContainer}>
            <NewPlanModal />
            <p className={styles.magin}></p>
            <LearningRecordModal />
          </div>

          <div>
            <ItemName>通知設定</ItemName>
          </div>
          <div className={styles.toggleBtn}>
            <ToggleBotton>通知設定 OFF</ToggleBotton>
          </div>
          <div className={styles.logoutBtn}>
            <PrimaryBotton>ログアウト</PrimaryBotton>
          </div>
        </Sidebar>

        <SidebarPushable>
          <Segment basic>
            <Header as="h3"></Header>
            <div className={styles.div}></div>
          </Segment>
        </SidebarPushable>
      </SidebarPushable>
    </div>
  );
});
