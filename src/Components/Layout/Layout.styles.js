import styled from "styled-components";

const GridStyles = styled.div``;

const RowStyles = styled.div`
  height: ${({ full }) => (full ? "100%" : "fit-content")};
  display: flex;
  flex-direction: row;
  gap: ${({ theme, gap }) => (gap ? theme.spacing[gap] : "")};

  background-color: ${(props) =>
    props.color ? props.theme.colors[props.color] : ""};

  align-content: right;
  align-items: right;
  justify-items: right;
`;

const ColumnStyles = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: ${({ full }) => (full ? "100%" : "fit-content")};
  gap: ${({ theme, gap }) => (gap ? theme.spacing[gap] : "")};

  flex-basis: ${(props) =>
    props.width ? `${(props.width / 12) * 100}%` : "1"};
  max-width: ${(props) =>
    props.width ? `${(props.width / 12) * 100}%` : "unset"};

  align-content: right;
  justify-items: right;
  align-items: right;

  padding: ${({ theme, padding }) => (padding ? theme.spacing[padding] : "")};

  background-color: ${(props) =>
    props.color ? props.theme.colors[props.color] : ""};
`;

export { GridStyles, ColumnStyles, RowStyles };
