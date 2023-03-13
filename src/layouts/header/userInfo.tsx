import classes from './userInfo.module.scss'
import UserImg from '../../assets/img/userImg.jpg'

export const UserInfo: React.FC = () => {
  return (
    <>
      <div className={classes.userInfoContainer}>
        <img src={UserImg} alt="user information" />
        <p>Khắc Thiện</p>
      </div>
    </>
  )
}
