import type { Meta, StoryObj } from "@storybook/react";

import FullList from "../components/FullList";
import { contactsInit } from "../types/Contact";

const meta: Meta<typeof FullList> = {
  title: "Example/FullList",
  component: FullList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    contacts: { control: "object" },
  },
} satisfies Meta<typeof FullList>;

export default meta;

type Story = StoryObj<typeof FullList>;

export const Default: Story = {
  args: {
    contacts: contactsInit,
  },
};

export const WithEmail: Story = {
  args: {
    contacts: contactsInit,
    showEmail: true,
  },
};
