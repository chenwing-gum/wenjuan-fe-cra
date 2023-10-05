import type { Meta, StoryObj } from '@storybook/react'

import Component from '../../components/QuestionComponents/QuestionParagraph/Component'

const meta = {
  title: 'Question/QuestionParagraph',
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
    isCenter: true,
  },
}

export const BreakLine: Story = {
  args: {
    text: 'hello\nhello\nhello',
  },
}
