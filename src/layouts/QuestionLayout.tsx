import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Spin } from 'antd'
import useLoadUserData from '../hooks/useLoadUserData'
import useNavPage from '../hooks/useNavPage'

const QuestionLayout: FC = () => {
  const { waitingUserData } = useLoadUserData()
  useNavPage(waitingUserData)

  return (
    <div style={{ height: '100vh' }}>
      {waitingUserData ? (
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Spin />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  )
}

export default QuestionLayout
