import type { Meta, StoryObj } from '@storybook/react'
import Box from './Box'

export default {
  title: 'Components/Box',
  component: Box,
} as Meta<typeof Box>

export const Default = {
  component: Box,
  title: 'Box',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    rounded: true,
    background: 'primary',
    color: 'secondary',
    children: 'This is a Box component',
  },
}



Default.args = {
  rounded: true,
  background: 'primary',
  color: 'secondary',
  children: 'This is a Box component',
}