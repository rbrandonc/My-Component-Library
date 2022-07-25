import styled from "styled-components";

import { Layout } from "../";

export const SidebarContainer = styled(Layout.Col)`
  height: 100%;
  /* max-width: 500px; */
`;

export const SidebarStyles = styled(Layout.Row)`
  min-height: 50%;
  max-height: 80%;
  background-color: ${({ theme, color }) => theme.colors[color || "primary"]};
  border-top-right-radius: ${({ theme }) => theme.spacing.md};
  border-bottom-right-radius: ${({ theme }) => theme.spacing.md};
`;

export const SidebarItemStyles = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  /* background-color: ${({ theme, color }) =>
    theme.colors[color || "primary"]}; */
`;

export const Header = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  /* border-top-right-radius: ${({ theme }) => theme.spacing.md}; */
  background-color: ${({ theme, color }) => theme.colors.primaryDarker};
  color: white;
`;
