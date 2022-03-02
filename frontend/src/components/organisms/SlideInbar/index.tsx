import { memo, VFC } from "react";
import { Checkbox, Icon, Menu, Sidebar } from "semantic-ui-react";
import { MarkdownEditor } from "../../atoms/MarkdownEditor";
import styles from "./index.module.css";

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  date: Date | undefined;
}

export const SlideinBar: VFC<Props> = memo((props) => {
  const { visible, setVisible, date } = props;

  return (
    <>
      <Sidebar
        animation="overlay"
        direction="bottom"
        icon="labeled"
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
      >
        <div className={styles.slideinContainer}>
          <div className={styles.SlideInleft}>
            <div>
              <div className={styles.lerningDayContainer}>
                <div className={styles.SlideInDay}>
                  {date ? date.getMonth() + 1 : null}月{date?.getDate()}日
                </div>
                <div className={styles.SlideInTask}>学習タスク</div>
              </div>
            </div>

            <div className={styles.taskContainer}>
              <p className={styles.taskText}>寿司打</p>
              <div className={styles.taskCheckItems}>
                <div className={styles.learnningTime}>
                  <input type="time" />
                  学習時間
                </div>
                <div className={styles.taskCheckBox}>
                  <Checkbox label="完了" />
                </div>
                <div>
                  <Icon name="trash" size="large" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.SlideInRight}>
            <div className={styles.SlideInRecord}>今日の記録</div>
            <div className={styles.markDownEditor}>
              <MarkdownEditor />
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
});
