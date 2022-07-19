import styled from "styled-components";
import "@fontsource/maven-pro";

export const Text = styled.span`
  font-family: "Maven Pro", sans-serif;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.black};
  font-size: ${({ theme, variant }) =>
    theme.fontSizes[variant ? variant : "p"]};
  line-height: calc(
    ${({ theme, variant }) => theme.fontSizes[variant ? variant : "p"]} + 2px
  );
`;
