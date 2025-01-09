import { Button } from "@adv-re/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
    variant: {
      control: { type: "radio" },
      options: ["solid", "outlined", "ghost", "contrast"],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    shape: {
      control: { type: "radio" },
      options: ["rounded", "square", "pill"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    isLoading: {
      control: { type: "boolean" },
    },
    loadingText: {
      control: { type: "text" },
    },
    loadingLabel: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (props) => <Button {...props} />,
  name: "Button",
  args: {
    children: "Contact",
    type: "button",
    variant: "solid",
    size: "md",
    shape: "rounded",
    disabled: false,
    isLoading: false,
  },
};
