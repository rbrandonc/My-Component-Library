import { useContext } from "react";

import { ThemeContext } from "styled-components";

import { Text } from "./Text.styles";

export default ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};
