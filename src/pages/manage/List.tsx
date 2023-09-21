import React, { FC, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
import { Typography } from 'antd'
import { useTitle } from 'ahooks'
import QuestionCard from '../../components/QuestionCard'
import styles from './common.module.scss'

const { Title } = Typography

const rowQuestionList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStart: false,
    answerCount: 5,
    createAt: '3月10日 13:23',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStart: true,
    answerCount: 6,
    createAt: '3月11日 13:23',
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStart: false,
    answerCount: 7,
    createAt: '3月12日 13:23',
  },
  {
    _id: 'q4',
    title: '问卷4',
    isPublished: true,
    isStart: true,
    answerCount: 8,
    createAt: '3月13日 13:23',
  },
]

const List: FC = () => {
  useTitle('问卷星-我的问卷')
  // const [searchParams] = useSearchParams()
  // console.log('keyword', searchParams.get('keyword'))

  const [questionList] = useState(rowQuestionList)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {questionList.length > 0 &&
          questionList.map(q => {
            const { _id } = q

            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className={styles.footer}>loadMore... 上滑加载更多</div>
    </>
  )
}

export default List
