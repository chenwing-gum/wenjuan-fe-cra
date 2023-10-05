import type { Meta, StoryObj } from '@storybook/react'

import Component from '../../components/QuestionComponents/QuestionInfo/Component'

const meta = {
  title: 'Question/QuestionInfo',
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
    desc: 'world',
  },
}

// 换行
export const DescBreakLine: Story = {
  args: {
    title: 'hello',
    desc: 'a\nb\nc',
  },
}
