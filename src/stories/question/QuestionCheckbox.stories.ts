import type { Meta, StoryObj } from '@storybook/react'

import Component from '../../components/QuestionComponents/QuestionCheckbox/Component'

const meta = {
  title: 'Question/QuestionCheckbox',
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
    title: 'hello',
    list: [
      { value: 'v1', text: 't1', checked: false },
      { value: 'v2', text: 't2', checked: true },
      { value: 'v3', text: 't3', checked: true },
    ],
    isVertical: true,
  },
}
