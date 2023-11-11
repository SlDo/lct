import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';
import { BadgeSize } from './types';

const meta: Meta<typeof Badge> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Badge',
  component: Badge,
  argTypes: {
    size: {
      options: [
        BadgeSize.SM,
        BadgeSize.DF,
        BadgeSize.MD,
        BadgeSize.LG
      ],
      control: { type: 'select' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Badge>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Example: Story = {
  render: (args: any) => (
    <Badge {...args} href='#'>
      frontend
    </Badge>
  )
};
