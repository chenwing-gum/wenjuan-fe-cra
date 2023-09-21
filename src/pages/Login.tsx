import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Login: FC = () => {
  const nav = useNavigate()
  return (
    <div>
      <p>Login</p>
      <div>
        <button onClick={() => nav(-1)}>返回</button>
      </div>
    </div>
  )
}

export default Login
