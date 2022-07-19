import { GridStyles, RowStyles, ColumnStyles } from "./Layout.styles";

const Grid = ({ children, ...props }) => {
  return <GridStyles {...props}>{children}</GridStyles>;
};

const Row = ({ children, ...props }) => {
  return <RowStyles {...props}>{children}</RowStyles>;
};

const Col = ({ children, ...props }) => {
  return <ColumnStyles {...props}>{children}</ColumnStyles>;
};

export default {
  Grid,
  Row,
  Col
};
