import { memo, VFC } from "react";
import {
  SidebarPushable,
  Sidebar,
  Segment,
  Header,
  Menu,
} from "semantic-ui-react";
import { ItemName } from "../../atoms/CalenderSidebar/ItemName/ItemName";
import { PrimaryButton } from "../../atoms/CalenderSidebar/PrimaryButton/PrimaryButton";
import { ToggleButton } from "../../atoms/CalenderSidebar/ToggleButton/ToggleButton";
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
            <ToggleButton>通知設定 OFF</ToggleButton>
          </div>
          <div className={styles.logoutBtn}>
            <PrimaryButton>ログアウト</PrimaryButton>
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
