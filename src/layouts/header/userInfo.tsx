import classes from './userInfo.module.scss'

export const UserInfo: React.FC = () => {
  return (
    <>
      <div className={classes.userInfoContainer}>
        <img
          src={'https://picsum.photos/id/237/200/300'}
          alt="user information"
        />
        <p>Khắc Thiện</p>
      </div>
    </>
  )
}
