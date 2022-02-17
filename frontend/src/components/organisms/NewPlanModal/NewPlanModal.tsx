import { memo, useState, VFC } from "react";
import styles from "./NewPlanModal.module.css";
import { Icon, Modal, ModalHeader } from "semantic-ui-react";
import { PrimaryBotton } from "../../atoms/CalenderSidebar/PrimaryBotton/PrimaryBtton";
import { NewPlanName } from "../../atoms/NewPlanModal/NewPlanName";
import { LerningPlanDays } from "../../atoms/NewPlanModal/LerningPlanDays";

export const NewPlanModal: VFC = memo(() => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      dimmer="inverted"
      trigger={
        <PrimaryBotton modalOpen={() => setOpen(true)}>
          新規学習を作成
        </PrimaryBotton>
      }
    >
      <ModalHeader icon="archive">
        <div className={styles.modalHeader}>
          <span className={styles.title}>新規学習計画を作成</span>
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
      <div className={styles.PlanBody}>
        <div className={styles.PlanName}>
          <NewPlanName LerningPlanLabel={"新規学習名"} />
        </div>
       <div className={styles.PlanStartEnd}>
          <LerningPlanDays LerningPlanLabel={"開始"} />
          <LerningPlanDays LerningPlanLabel={"終了"} />
       </div>
       <div className={styles.PlanWeekHour}>
          <div><label>実施曜日</label><br /><input type="text" /></div>
          <div><label>学習時間</label><br /><input type="time" /></div>
        </div>
        <button>学習計画を追加</button>
      </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
});
