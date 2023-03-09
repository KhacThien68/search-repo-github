import { useNavigate } from 'react-router-dom'
import { ROUTER } from '../../router/config'
import logoIconFull from '../../assets/logo/logoIconFull.png'
import classes from './index.module.scss'

export const Logo = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(ROUTER.HOME_PAGE)
  }

  return (
    <div onClick={onClick}>
      <img src={logoIconFull} alt="logo icon" className={classes.logoIcon} />
    </div>
  )
}
