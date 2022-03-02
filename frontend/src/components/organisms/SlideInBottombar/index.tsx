import { memo, VFC } from "react";
import { Menu, Sidebar } from "semantic-ui-react";
import styles from "./index.module.css";

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  dateStr: string | undefined;
}

export const SlideInBottombar: VFC<Props> = memo((props) => {
  const { visible, setVisible, dateStr } = props;

  return (
    <>
      <Sidebar
        as={Menu}
        animation="overlay"
        direction="bottom"
        icon="labeled"
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item as="a">クリックしたよ</Menu.Item>
        <Menu.Item as="a" className={styles.margin}>
          {dateStr}
        </Menu.Item>
        <Menu.Item as="a"></Menu.Item>
      </Sidebar>
    </>
  );
});
