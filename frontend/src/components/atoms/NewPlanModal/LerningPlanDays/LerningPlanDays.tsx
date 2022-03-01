import { memo, VFC } from "react";
import styles from "./LerningPlanDays.module.css"

interface Props {
    LerningPlanLabel: string;
}

export const LerningPlanDays: VFC<Props> = memo((props) => {
    const { LerningPlanLabel } = props;
    return (
        <>
            <div>
                <label>{LerningPlanLabel}</label><br />
                <input className={styles.PlanDate} type="date" />
            </div>
        </>
    );
});