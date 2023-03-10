import { Col } from 'antd'
import React from 'react'
import { RepoItem } from '../../store/interfaces'
import { CardItem } from './CardItem'

type Props = {
  repo: RepoItem
  userId?: string
}

export const RepoUserItem: React.FC<Props> = ({ repo, userId }) => {
  return (
    <Col
      key={repo.id}
      xs={24}
      sm={12}
      md={12}
      lg={8}
      xl={6}
      xxl={6}
      style={{ maxWidth: 300, margin: '0 auto' }}
    >
      <CardItem repo={repo} userId={userId} />
    </Col>
  )
}
