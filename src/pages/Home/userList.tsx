import { Row } from 'antd'
import { UserRepoItem } from './store/interfaces'
import { UserItem } from './userItem'

type Props = {
  value: UserRepoItem[]
}

export const UserList: React.FC<Props> = ({ value }) => {
  const users = value
  return (
    <Row
      gutter={[16, 24]}
      justify="center"
    >
      {users.map((user, index) => (
        <UserItem value={user} key={index} />
      ))}
    </Row>
  )
}
