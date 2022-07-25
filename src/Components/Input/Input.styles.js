import styled from "styled-components";

export const Input = styled.input`
  font-size: ${({ theme, size }) => theme.fontSizes[size ? size : "p"]};
  line-height: calc(
    ${({ theme, size }) => theme.fontSizes[size ? size : "p"]} + 2px
  );
  padding: ${({ theme, size }) => theme.spacing[size] || theme.spacing.md};
  border: 3px solid ${({ theme, color }) => theme.colors[color]};
  border-radius: 10px;

  &:active {
  }
`;
