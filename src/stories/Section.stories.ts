import type { Meta, StoryObj } from "@storybook/react";

import Section from "../components/Section";
import ContactListItem from "../components/ContactListItem";
import { contactsInit } from "../types/Contact";

const meta: Meta<typeof Section> = {
  title: "Example/Section",
  component: Section,
  subcomponents: { ContactListItem: ContactListItem as React.ComponentType<unknown> },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    contacts: contactsInit
  },
};
