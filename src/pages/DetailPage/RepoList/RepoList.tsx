import { Row } from "antd";
import React from "react";
import { RepoItem } from "../store/interfaces";
import { RepoUserItem } from './RepoItem/RepoItem'

type Props = {
  list: RepoItem[]
  userId?: string
}

export const RepoList: React.FC<Props> = ({ list, userId }) => {
  return (
    <Row
      gutter={[16, 24]}
      style={{ display: 'flex', justifyContent: 'space-around' }}
    >
      {list &&
        list.map((repo, index) => {
          return <RepoUserItem repo={repo} userId={userId} key={index} />
        })}
    </Row>
  )
}
