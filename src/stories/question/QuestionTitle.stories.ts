import type { Meta, StoryObj } from '@storybook/react'

import Component from '../../components/QuestionComponents/QuestionTitle/Component'

const meta = {
  title: 'Question/QuestionTitle',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

// 默认属性
export const Default: Story = {
  args: {},
}

// 设置属性
export const SetProps: Story = {
  args: {
    text: 'hello',
    level: 2,
    isCenter: true,
  },
}
