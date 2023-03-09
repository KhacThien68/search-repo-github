import { Card, Col } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import { Link } from 'react-router-dom'
import { RepoItem } from './store/interfaces'

type Props = {
  value: RepoItem
}

export const UserItem: React.FC<Props> = ({ value }) => {
  const user = value
  return (
    <Col
      xs={24}
      sm={12}
      md={12}
      lg={8}
      xl={6}
      key={user?.id}
      style={{ margin: '0 auto' }}
    >
      <Link to={`/${user.login}`}>
        <Card
          hoverable
          style={{
            maxWidth: 300,
            borderRadius: '12px',
            overflow: 'hidden',
            margin: '0 auto'
          }}
          cover={
            <img
              src={user?.avatar_url}
              alt="github user avatar"
              style={{ maxWidth: '300px' }}
            />
          }
        >
          <Meta title={user?.login} description={`User ID: ${user.id}`} />
        </Card>
      </Link>
    </Col>
  )
}
