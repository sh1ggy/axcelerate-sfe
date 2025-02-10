import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import ContactListItem from "../components/ContactListItem";

const meta: Meta<typeof ContactListItem> = {
  title: "Example/ContactListItem",
  component: ContactListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof ContactListItem>;

export default meta;

type Story = StoryObj<typeof ContactListItem>;

export const InactiveNoEmail: Story = {
  args: {
    label: "Jane Doe",
    isActive: false,
  },
};

export const InactiveEmail: Story = {
  args: {
    label: "Jane Doe",
    email: "Jane.Doe@test.com",
  },
};

export const ActiveNoEmail: Story = {
  args: {
    label: "Jane Doe",
    isActive: true,
  },
};

export const ActiveEmail: Story = {
  args: {
    label: "Jane Doe",
    email: "Jane.Doe@test.com",
    isActive: true,
  },
};
