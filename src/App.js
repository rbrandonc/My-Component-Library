import { useState } from "react";

import "./styles.css";
import {
  Stories,
  Layout,
  ThemeProvider,
  Button,
  Text,
  Sidebar
} from "./Components";

export default function App() {
  let [selectedComponent, setSelectedComponent] = useState("Button");

  const ComponentList = () => {
    return (
      <Sidebar>
        {[
          <Text color="white">Components</Text>,
          ...Object.keys(Stories).map((component) => (
            <Button
              variant="ghost"
              color="white"
              selected
              onClick={() => setSelectedComponent(component)}
              size="xs"
              full
              active={selectedComponent === component}
            >
              {component}
            </Button>
          ))
        ]}
      </Sidebar>
    );
  };

  const SelectedComponent = () => {
    const SelectedComponentStories = Stories[selectedComponent];

    return (
      <>
        {Object.keys(SelectedComponentStories).map((story) => {
          let Story = SelectedComponentStories[story];

          return (
            <>
              <Text>{story.slice(0, story.indexOf(selectedComponent))}</Text>
              <Story />
            </>
          );
        })}
      </>
    );
  };

  return (
    <ThemeProvider>
      <Layout.Row full>
        <ComponentList />

        <Layout.Col
          padding="lg"
          gap="sm"
          alignVertical="center"
          alignHorizontal="right"
        >
          <SelectedComponent />
        </Layout.Col>
      </Layout.Row>
    </ThemeProvider>
  );
}
