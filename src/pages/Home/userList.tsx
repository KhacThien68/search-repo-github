import { Row } from 'antd'
import { RepoItem } from './store/interfaces'
import { UserItem } from './userItem'
// import UserItem from '../UserItem/UserItem'

type Props = {
  value: RepoItem[]
}

export const UserList: React.FC<Props> = ({ value }) => {
  const users = value
  return (
    <Row
      gutter={[16, 24]}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {users.map((user, index) => (
        <UserItem value={user} key={index} />
      ))}
    </Row>
  )
}
