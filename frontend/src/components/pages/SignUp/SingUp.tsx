import { memo, VFC } from "react";

interface Props {
  children: string;
}

export const SingUp: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <div>{children}</div>
      <div></div>
    </>
  );
});
