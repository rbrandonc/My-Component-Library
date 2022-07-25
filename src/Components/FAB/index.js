import { FAB } from "./FAB.styles";

import Button from "../Button";

import Text from "../Text/Text";

export default ({ children, ...props }) => {
  return (
    <FAB>
      <Button color="primary" {...props}>
        <Text>{children || "Hi :)"}</Text>
      </Button>
    </FAB>
  );
};
