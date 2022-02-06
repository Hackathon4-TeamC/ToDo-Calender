import { memo, VFC } from "react";
import { Button } from "semantic-ui-react";

interface Props {
  children: string;
}

export const PrimaryBotton: VFC<Props> = memo((props) => {
  const { children } = props;
  return <Button primary>{children}</Button>;
});
