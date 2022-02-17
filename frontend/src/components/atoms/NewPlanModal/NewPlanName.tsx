import { memo, VFC } from "react";
import styles from "./NewPlanName.module.css";

interface Props {
    LerningPlanLabel: string;
}

export const NewPlanName: VFC<Props> = memo((props) => {
    const { LerningPlanLabel } = props;
    return (
        <>
            <div>
                <label>{LerningPlanLabel}</label>
                <input className={styles.NewPlanNameInput} type="text" />
            </div>
        </>
    );
});