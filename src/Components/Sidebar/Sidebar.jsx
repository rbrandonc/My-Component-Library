import {
  SidebarContainer,
  SidebarStyles,
  SidebarItemStyles,
  Header
} from "./Sidebar.styles";
import { Profile } from "css.gg";
import Layout from "../Layout";
import Text from "../Text";

const Sidebar = ({ children, ...props }) => {
  return (
    <SidebarContainer
      width="4"
      background="primary"
      verticalAlign="center"
      full
      {...props}
    >
      <SidebarStyles>
        <Layout.Col full>
          <Header>
            <Layout.Row>
              <Layout.Col
                full
                width="2"
                verticalAlign="center"
                horizontalAlign="center"
              >
                <Profile />
              </Layout.Col>
              <Layout.Col>
                <Layout.Row>
                  <Text>Brandon Clark</Text>
                </Layout.Row>
                <Layout.Row>
                  <Text>LinkedIn</Text>
                </Layout.Row>
              </Layout.Col>
            </Layout.Row>
          </Header>

          <Layout.Row full>
            <Layout.Col>
              {children.map((child) => (
                <SidebarItem>{child}</SidebarItem>
              ))}
            </Layout.Col>
          </Layout.Row>
        </Layout.Col>
      </SidebarStyles>
    </SidebarContainer>
  );
};

const SidebarItem = ({ children, ...props }) => {
  return <SidebarItemStyles {...props}>{children}</SidebarItemStyles>;
};

export default Sidebar;
export { SidebarItem };
