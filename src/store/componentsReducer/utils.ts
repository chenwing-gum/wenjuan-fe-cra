import { ComponentInfoType, ComponentsStateType } from '.'

/**
 * @param fe_id 当前id
 * @param componentList 组件列表
 */

export function getNextSelectedId(
  fe_id: string,
  componentList: ComponentInfoType[]
) {
  const visibleComponentList = componentList.filter(c => !c.isHidden)
  const index = visibleComponentList.findIndex(c => c.fe_id === fe_id)
  if (index < 0) return ''

  let newSelectedId = ''
  const length = visibleComponentList.length

  if (length <= 1) {
    newSelectedId = ''
  } else {
    if (index + 1 === length) {
      newSelectedId = visibleComponentList[index - 1].fe_id
    } else {
      newSelectedId = visibleComponentList[index + 1].fe_id
    }
  }

  return newSelectedId
}

/**
 * @param state state
 * @param newComponent
 */
export function insertNewComponent(
  state: ComponentsStateType,
  newComponent: ComponentInfoType
) {
  const { selectedId, componentList } = state
  const index = componentList.findIndex(c => c.fe_id === selectedId)

  if (index < 0) {
    state.componentList.push(newComponent)
  } else {
    state.componentList.splice(index + 1, 0, newComponent)
  }

  state.selectedId = newComponent.fe_id
}
