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
import styles from "./CalenderSidebar.module.css";

export const CalenderSidebar: VFC = memo(() => {
  return (
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
          <PrimaryBotton>学習計画を追加</PrimaryBotton>
          <p className={styles.magin}></p>
          <PrimaryBotton>学習計画を見る</PrimaryBotton>
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
          <div className={styles.div}>仮のコンポーネント</div>
        </Segment>
      </SidebarPushable>
    </SidebarPushable>
  );
});
