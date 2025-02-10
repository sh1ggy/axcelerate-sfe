import type { Meta, StoryObj } from "@storybook/react";

import SearchField from "../components/SearchField";

const meta: Meta<typeof SearchField> = {
  title: "Example/SearchField",
  component: SearchField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof SearchField>;

export default meta;

type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  args: {
    search: "",
    setSearch: undefined
  },
};
