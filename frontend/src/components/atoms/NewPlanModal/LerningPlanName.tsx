import { memo, VFC } from "react";
import styles from "./LerningPlanName.module.css";

interface Props {
    LerningPlanLabel: string;
}

export const LerningPlanName: VFC<Props> = memo((props) => {
    const { LerningPlanLabel } = props;
    return (
        <>
            <div>
                <label>{LerningPlanLabel}</label>
                <input type="text" />
            </div>
        </>
    );
});