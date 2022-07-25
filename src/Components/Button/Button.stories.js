import Button from "./";

const DefaultButton = () => <Button />;

const OutlinedButton = () => <Button variant="outline" />;

const GhostButton = () => <Button variant="ghost" />;

const SmallButton = () => <Button size="sm" />;

const LargeButton = () => <Button size="lg" />;

const DisabledButton = () => <Button disabled />;

export default {
  DefaultButton,
  SmallButton,
  LargeButton,
  OutlinedButton,
  GhostButton,
  DisabledButton
};
