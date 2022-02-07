import { memo, useState, VFC } from "react";
import styles from "./LearningRecordModal.module.css";
import { Button, Icon, Modal, ModalHeader } from "semantic-ui-react";

export const LearningRecordModal: VFC = memo(() => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      dimmer="inverted"
      trigger={<Button>学習記録</Button>}
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
              <div>
                この月<span className={styles.totalTime}>111</span>時間
              </div>
              <div>
                トータル<span className={styles.totalTime}>222</span>時間
              </div>
            </div>
            <p className={styles.learningContentTitle}>
              学習項目ごとの総合学習時間
            </p>
            <div className={styles.learningContentsContainer}>
              <div className={styles.learningTimesDiv}>
                <div>
                  <p className={styles.contentName}>寿司打</p>
                </div>
                <div>
                  <span className={styles.contentsTotalTime}>0.5</span>時間
                </div>
              </div>
              <div className={styles.learningTimesDiv}>
                <div>
                  <p>寿司打</p>
                </div>
                <div>
                  <span className={styles.contentsTotalTime}>0.5</span>時間
                </div>
              </div>
              <div className={styles.learningTimesDiv}>
                <div>
                  <p>寿司打</p>
                </div>
                <div>
                  <span className={styles.contentsTotalTime}>0.5</span>時間
                </div>
              </div>
              <div className={styles.learningTimesDiv}>
                <div>
                  <p>寿司打</p>
                </div>
                <div>
                  <span className={styles.contentsTotalTime}>0.5</span>時間
                </div>
              </div>
              <div className={styles.learningTimesDiv}>
                <div>
                  <p>寿司打</p>
                </div>
                <div>
                  <span className={styles.contentsTotalTime}>0.5</span>時間
                </div>
              </div>
              <div className={styles.learningTimesDiv}>
                <div>
                  <p>寿司打</p>
                </div>
                <div>
                  <span className={styles.contentsTotalTime}>0.5</span>時間
                </div>
              </div>
            </div>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
});
