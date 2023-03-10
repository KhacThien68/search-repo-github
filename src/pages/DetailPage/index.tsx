import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { RepoList } from './RepoList/RepoList'
import { selectIsLoading, selectRepoList } from './store/slice'
import { getDetailUser } from './store/thunk'
import classes from './DetailRepoUser.module.scss'
import { changeActiveMenu } from '../../app/slice'
import Spinner from '../../components/Spinner'

export default function DetailRepoUser() {
  const dispatch = useAppDispatch()
  const user = useParams()
  const userId = user.id

  // useAppSelector
  const repoList = useAppSelector(selectRepoList)
  const isLoading = useAppSelector(selectIsLoading)

  useEffect(() => {
    dispatch(changeActiveMenu(0))
    dispatch(getDetailUser({ url: `users/${user.id}/repos` }))
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className={classes.repoHeader}>
        <div className={classes.userName}>
          <h1>{userId}</h1>
        </div>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <RepoList list={repoList} userId={userId} />
        </div>
      )}
    </div>
  )
}
