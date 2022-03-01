import { memo, VFC } from "react";
import styles from "./LerningPlanTime.module.css";

interface Props {
    LerningPlanLabel: string;
}

export const LerningPlanTime: VFC<Props> = memo((props) => {
    const { LerningPlanLabel } = props;
    return (
        <>
            <div>
                <label>{LerningPlanLabel}</label><br />
                <input className={styles.StartTime} type="time" />
            </div>
        </>
    );
});