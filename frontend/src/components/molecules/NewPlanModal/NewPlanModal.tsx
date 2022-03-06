import { memo, useState, VFC } from "react";
import styles from "./NewPlanModal.module.css";
import { Icon, Modal, ModalHeader } from "semantic-ui-react";
import { PrimaryBotton } from "../../atoms/CalenderSidebar/PrimaryBotton/PrimaryBtton";
import { NewPlanName } from "../../atoms/NewPlanModal/NewPlanName/NewPlanName";
import { LerningPlanDays } from "../../atoms/NewPlanModal/LerningPlanDays/LerningPlanDays";
import { LerningPlanTime } from "../../atoms/NewPlanModal/LerningPlanTime/LerningPlanTime";
import { LerningCheckBox } from "../../atoms/NewPlanModal/LerningCheckBox/LerningCheckBox";
import { WideButton } from "../../atoms/shared/WideButton";

export const NewPlanModal: VFC = memo(() => {
  const [open, setOpen] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  // button押したとき

  // const onClickNewPlan = () => {
  //   if (!newPlanName) {
  //     textNoneMessage();
  //   }
  // }
  // const textNoneMessage = () => {
  //   setErrorMessage("未入力の項目があります");
  // };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      dimmer="inverted"
      trigger={
        <PrimaryBotton onClick={() => setOpen(true)}>
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
          <label>新規学習名</label>
          <NewPlanName
            type="text"
            placeholder="学習プランの名称を入力してください" />
        </div>
       <div className={styles.PlanStartEnd}>
          <LerningPlanDays LerningPlanLabel={"開始"} />
          <LerningPlanDays LerningPlanLabel={"終了"} />
       </div>
       <div className={styles.PlanWeekHour}>
          <div>
          <span>学習する曜日</span><br />
            <LerningCheckBox LerningPlanLabel={"月"} />
            <LerningCheckBox LerningPlanLabel={"火"} />
            <LerningCheckBox LerningPlanLabel={"水"} />
            <LerningCheckBox LerningPlanLabel={"木"} />
            <LerningCheckBox LerningPlanLabel={"金"} />
            <LerningCheckBox LerningPlanLabel={"土"} />
            <LerningCheckBox LerningPlanLabel={"日"} />
          </div>
          <LerningPlanTime LerningPlanLabel={"学習時間"} />
        </div>
        {/* button押したときの挙動 */}
        {/* {errorMessage ? (
            <p className={styles.errorMessage}>{errorMessage}</p>
          ) : null} */}
        <WideButton children={"学習計画を追加"} />
      </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
});
