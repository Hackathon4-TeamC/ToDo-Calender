import { memo, VFC } from "react";
import { Button } from "semantic-ui-react";

interface Props {
  children: string;
}

export const ToggleButton: VFC<Props> = memo((props) => {
  const { children } = props;
  return <Button toggle>{children}</Button>;
});
