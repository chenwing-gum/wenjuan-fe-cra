import React, { FC } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { Typography } from 'antd'
import {
  componentConfigGroup,
  ComponentConfigType,
} from '../../../components/QuestionComponents'
import { useDispatch } from 'react-redux'
import { addComponent } from '../../../store/componentsReducer'
import styles from './ComponentLib.module.scss'

const { Title } = Typography

function genComponent(c: ComponentConfigType) {
  const { title, type, Component, defaultProps } = c
  const dispatch = useDispatch()

  function handleClic() {
    dispatch(
      addComponent({
        fe_id: nanoid(),
        title,
        type,
        props: defaultProps,
      })
    )
  }

  return (
    <div key={type} className={styles.wrapper} onClick={handleClic}>
      <div className={styles.component}>
        <Component />
      </div>
    </div>
  )
}

const Lib: FC = () => {
  return (
    <>
      {componentConfigGroup.map((group, index) => {
        const { groupId, groupName, components } = group
        return (
          <div key={groupId}>
            <Title
              level={3}
              style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0' }}
            >
              {groupName}
            </Title>
            <div>{components.map(c => genComponent(c))}</div>
          </div>
        )
      })}
    </>
  )
}

export default Lib
