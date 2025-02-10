import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import SectionHeader from "../components/SectionHeader";
import ContactListItem from "../components/ContactListItem";

const meta: Meta<typeof SectionHeader> = {
  title: "Example/SectionHeader",
  component: SectionHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof SectionHeader>;

export default meta;

type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: {
    label: "Absent",
    onClick: fn(),
    child: <ContactListItem label="Hello" />
  },
};


