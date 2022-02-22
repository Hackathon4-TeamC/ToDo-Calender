import { memo, VFC } from "react";
import { Button } from "semantic-ui-react";

interface Props {
  children: string;
  modalOpen?: () => void;
}

export const PrimaryBotton: VFC<Props> = memo((props) => {
  const { children, modalOpen } = props;
  return (
    <Button primary onClick={modalOpen}>
      {children}
    </Button>
  );
});
