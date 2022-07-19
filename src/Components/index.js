import Button from "./Button/Button.stories";
import Input from "./Input/Input.stories";
import Text from "./Text/Text.stories";

export { default as Input } from "./Input";
export { default as Button } from "./Button";
export { default as Text } from "./Text";
export { default as Layout } from "./Layout";
export { default as Sidebar } from "./Sidebar/Sidebar";
export { default as ThemeProvider } from "./ThemeProvider/ThemeProvider";

const Stories = {
  Button,
  Input,
  Text
};

export { Stories };
