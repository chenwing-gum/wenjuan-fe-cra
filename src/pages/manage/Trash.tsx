import React, { FC, useState } from 'react'
import { Typography, Empty, Table, Tag, Button, Space, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useTitle } from 'ahooks'
import ListSearch from '../../components/ListSearch'
import styles from './common.module.scss'

const { Title } = Typography
const { confirm } = Modal

const rowQuestionList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStart: true,
    answerCount: 5,
    createAt: '3月10日 13:23',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStart: false,
    answerCount: 6,
    createAt: '3月11日 13:23',
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStart: true,
    answerCount: 7,
    createAt: '3月12日 13:23',
  },
]

const Trash: FC = () => {
  useTitle('问卷星 - 回收站')
  const [questionList] = useState(rowQuestionList)
  const [selectIds, setSelectIds] = useState<string[]>([])

  function del() {
    confirm({
      title: '确认彻底删除该问卷',
      icon: <ExclamationCircleOutlined />,
      content: '删除以后不可以找回',
      onOk: () => alert(`删除${JSON.stringify(selectIds)}`),
    })
  }

  const tableColumns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing">已发布</Tag>
        ) : (
          <Tag>未发布</Tag>
        )
      },
    },
    {
      title: '答卷',
      dataIndex: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createAt',
    },
  ]

  const TableElem = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button type="primary" disabled={selectIds.length === 0}>
            恢复
          </Button>
          <Button danger disabled={selectIds.length === 0} onClick={del}>
            彻底删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={questionList}
        columns={tableColumns}
        pagination={false}
        rowKey={q => q._id}
        rowSelection={{
          type: 'checkbox',
          onChange: selectedRowKeys => {
            setSelectIds(selectedRowKeys as string[])
          },
        }}
      />
    </>
  )

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 && TableElem}
      </div>
    </>
  )
}

export default Trash
