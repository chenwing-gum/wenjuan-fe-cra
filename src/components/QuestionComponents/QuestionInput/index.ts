/*
 * @description: 问卷 输入框
 * @date: 2023-09-28 14:44:08  @author: chenborao
 */

import Component from './Component'
import PropComponent from './PropComponent'
import { QUestionInputDefaultProps } from './interface'

export * from './interface'

export default {
  title: '输入框',
  type: 'questionInput',
  Component,
  PropComponent,
  defaultProps: QUestionInputDefaultProps,
}
