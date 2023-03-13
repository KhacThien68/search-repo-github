import { EyeFilled, StarTwoTone } from '@ant-design/icons'
import { Button, Card, Modal } from 'antd'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import Spinner from '../../../../components/Spinner'
import { RepoItem } from '../../store/interfaces'
import classes from './CardItem.module.scss'
import {
  changeReadmeContent,
  selectIsLoading,
  selectReadmeContent,
} from './store/slice'
import { getReadMeDetail } from './store/thunk'

type Props = {
  repo: RepoItem
  userId?: string
}

export const CardItem: React.FC<Props> = ({ repo, userId }) => {
  const dispatch = useAppDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const readmeContent = useAppSelector(selectReadmeContent)
  const isLoading = useAppSelector(selectIsLoading)

  const readme = decodeURIComponent(escape(window.atob(readmeContent)))

  const showModal = (selectedRepo: string) => {
    setIsModalVisible(true)
    dispatch(changeReadmeContent(''))
    dispatch(
      getReadMeDetail({
        url: `repos/${userId}/${selectedRepo}/contents/README.md`,
      }),
    )
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
          <span>{repo.stargazers_count}</span>
        </div>
        <div>
          <EyeFilled style={{ fontSize: '20px', color: '#f56e8b' }} />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
      <p className={classes.language}>
        Language: {repo.language && <span>{repo.language}</span>}
      </p>
      <Button
        type="primary"
        onClick={() => showModal(repo.name)}
        style={{ width: '100%', margin: '20px auto', borderRadius: '8px' }}
      >
        README
      </Button>
      <Modal
        title={<span className={classes.modalTitle}>README</span>}
        open={isModalVisible}
        onOk={handleOk}
        centered
        onCancel={handleCancel}
        wrapClassName={classes.wrapModel}
        mask={true}
        width="80%"
        style={{ maxWidth: '1000px', height: '80%' }}
        cancelButtonProps={{ style: { display: 'none' } }}
        destroyOnClose={true}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{readme}</ReactMarkdown>
        )}
      </Modal>
    </Card>
  )
}
