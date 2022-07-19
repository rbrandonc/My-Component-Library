import { Button } from "./Button.styles";

import Text from "../Text";

export default ({ children, ...props }) => {
  return (
    <Button color="primary" {...props}>
      <Text variant={props.size}>{children || "Hi :)"}</Text>
    </Button>
  );
};
