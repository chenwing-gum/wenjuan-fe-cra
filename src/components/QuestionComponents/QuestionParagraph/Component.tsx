import React, { FC } from 'react'
import { Typography } from 'antd'
import {
  QuestionParagraphPropsType,
  QuestionParagraphDefaultProps,
} from './interface'

const { Paragraph } = Typography

const Component: FC<QuestionParagraphPropsType> = (
  props: QuestionParagraphPropsType
) => {
  const { text = '', isCenter = false } = {
    ...QuestionParagraphDefaultProps,
    ...props,
  }

  const textList = text.split('\n')

  return (
    <Paragraph
      style={{ textAlign: isCenter ? 'center' : 'start', margin: '0' }}
    >
      {textList.map((t, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {t}
        </span>
      ))}
    </Paragraph>
  )
}

export default Component
