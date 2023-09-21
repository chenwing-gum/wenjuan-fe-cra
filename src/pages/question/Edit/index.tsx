import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

const Edit: FC = () => {
  const { id = '' } = useParams()
  return <p>Edit {id}</p>
}

export default Edit
