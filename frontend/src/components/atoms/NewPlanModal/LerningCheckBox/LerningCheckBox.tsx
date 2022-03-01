import { memo, VFC } from "react";
import styles from "./LerningCheckBox.module.css";

interface Props {
    LerningPlanLabel: string;
}

export const LerningCheckBox: VFC<Props> = memo((props) => {
    const { LerningPlanLabel } = props;
    return (
        <>
            <div className={styles.CheckBoxContainer}>
                <label>{LerningPlanLabel}</label>
                <input className={styles.LerningCheckBoxInput} type="checkbox" />
            </div>
        </>
    );
});