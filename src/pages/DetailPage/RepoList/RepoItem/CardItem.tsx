import { EyeFilled, StarTwoTone } from '@ant-design/icons'
import { Button, Card, Modal } from 'antd'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { RepoItem } from '../../store/interfaces'
import classes from './CardItem.module.scss'

type Props = {
  repo: RepoItem
  userId?: string
}

export const CardItem: React.FC<Props> = ({ repo, userId }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [readMe, setReadMe] = useState('')
  const showModal = (selectedRepo: any) => {
    setIsModalVisible(true)
    setReadMe('')
    fetch(
      `https://api.github.com/repos/${userId}/${selectedRepo}/contents/README.md`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.content) {
          return setReadMe(
            decodeURIComponent(escape(window.atob(data.content))),
          )
        } else {
          setReadMe("This repostory doesn't have README file")
        }
      })
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <Card
      title={repo.name}
      bordered={true}
      style={{ borderRadius: '12px', backgroundColor: '#4beec5' }}
    >
      <div className={classes.watcherStar}>
        <div>
          <StarTwoTone
            style={{
              fontSize: '20px',
            }}
            twoToneColor="#ffff01"
          />{' '}
          <span style={{ marginLeft: '10px' }}>{repo.stargazers_count}</span>
        </div>
        <div>
          <EyeFilled style={{ fontSize: '20px', color: '#f56e8b' }} />
          <span style={{ marginLeft: '10px' }}>{repo.watchers_count}</span>
        </div>
      </div>
      <p style={{ marginTop: '32px' }}>
        Language:{' '}
        {repo.language && (
          <span
            style={{
              backgroundColor: '#f3ff16',
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '16px',
              color: '#163B67',
              fontWeight: '600',
              marginLeft: 20,
            }}
          >
            {repo.language}
          </span>
        )}
      </p>
      <Button
        type="primary"
        onClick={() => showModal(repo.name)}
        style={{ margin: '20px auto', borderRadius: '8px' }}
      >
        README
      </Button>
      <Modal
        title="README"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        mask={false}
        width="80%"
        style={{ maxWidth: '1000px', height: '80%' }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{readMe}</ReactMarkdown>
      </Modal>
    </Card>
  )
}
