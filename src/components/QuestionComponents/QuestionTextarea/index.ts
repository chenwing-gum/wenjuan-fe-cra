/*
 * @description: 问卷 多行输入
 * @date: 2023-09-28 14:44:08  @author: chenwing_gum
 */

import Component from './Component'
import PropComponent from './PropComponent'
import { QuestionTextareaDefaultProps } from './interface'

export * from './interface'

export default {
  title: '输入框',
  type: 'questionTextarea',
  Component,
  PropComponent,
  defaultProps: QuestionTextareaDefaultProps,
}
