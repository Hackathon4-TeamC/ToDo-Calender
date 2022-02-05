import { memo, VFC } from "react";
import { Button } from "semantic-ui-react";

interface Props {
  children: string;
}

export const SingInBtn: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Button color="grey" size="big">
      {children}
    </Button>
  );
});
