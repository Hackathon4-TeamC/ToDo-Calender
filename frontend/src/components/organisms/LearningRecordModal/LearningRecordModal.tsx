import { memo, useState, VFC } from "react";
import styles from "./LearningRecordModal.module.css";
import { Icon, Modal, ModalHeader } from "semantic-ui-react";
import { CotentsTotalTime } from "../../atoms/LearningRecordModal/ContentsTotalTime/ContentsTotalTime";
import { TotalTime } from "../../atoms/LearningRecordModal/TotalTime/TotalTime";
import { PrimaryBotton } from "../../atoms/CalenderSidebar/PrimaryBotton/PrimaryBtton";

export const LearningRecordModal: VFC = memo(() => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      dimmer="inverted"
      trigger={
        <PrimaryBotton modalOpen={() => setOpen(true)}>
          学習記録を見る
        </PrimaryBotton>
      }
    >
      <ModalHeader icon="archive">
        <div className={styles.modalHeader}>
          <span className={styles.title}>学習記録一覧</span>
          <Icon
            name="close"
            size="big"
            className={styles.icon}
            onClick={() => setOpen(false)}
          />
        </div>
      </ModalHeader>

      <Modal.Content className={styles.modal}>
        <Modal.Description>
          <div className={styles.modalContainer}>
            <div className={styles.totalTimeContainer}>
              <TotalTime children={"この月"} totalTime={111} />
              <TotalTime children={"トータル"} totalTime={222} />
            </div>
            <p className={styles.learningContentTitle}>
              学習項目ごとの総合学習時間
            </p>
            <div className={styles.learningContentsContainer}>
              <CotentsTotalTime children={"寿司打"} totalTime={0.5} />
              <CotentsTotalTime children={"寿司打"} totalTime={0.5} />
              <CotentsTotalTime children={"寿司打"} totalTime={0.5} />
              <CotentsTotalTime children={"寿司打"} totalTime={0.5} />
              <CotentsTotalTime children={"寿司打"} totalTime={0.5} />
              <CotentsTotalTime children={"寿司打"} totalTime={0.5} />
            </div>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
});
