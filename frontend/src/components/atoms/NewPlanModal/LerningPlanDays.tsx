import { memo, VFC } from "react";

interface Props {
    LerningPlanLabel: string;
}

export const LerningPlanDays: VFC<Props> = memo((props) => {
    const { LerningPlanLabel } = props;
    return (
        <>
            <div>
                <label>{LerningPlanLabel}</label><br />
                <input type="date" />
            </div>
        </>
    );
});