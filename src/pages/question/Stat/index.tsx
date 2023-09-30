import React, { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'

const Stat: FC = () => {
  const { loading } = useLoadQuestionData()

  return (
    <div>
      <p>Edit</p>
      {loading ? <p>loading...</p> : <p>{111}</p>}
    </div>
  )
}

export default Stat
