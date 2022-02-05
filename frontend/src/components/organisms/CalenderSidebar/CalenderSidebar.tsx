import { memo, useState, VFC } from "react";
import {
  SidebarPushable,
  Sidebar,
  MenuItem,
  Icon,
  Segment,
  Header,
  Menu,
  Button,
} from "semantic-ui-react";
import styles from "./CalenderSidebar.module.css";

export const CalenderSidebar: VFC = memo(() => {
  const [visible, setVisible] = useState(false);
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
          <div className={styles.text}>学習</div>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.btnContainer}>
          <Button primary>学習計画を追加</Button>
          <p className={styles.magin}></p>
          <Button primary>学習計画を見る</Button>
        </div>

        <div>
          <div className={styles.text}>通知設定</div>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.toggleBtn}>
          <Button toggle>通知設定</Button>
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
