import { Logo } from './logo'
import { UserInfo } from './userInfo'
import classes from './index.module.scss'
import { LIST_MENU } from './types'
import { useNavigate } from 'react-router-dom'
import { MenuItem } from '../../pages/Home/store/interfaces'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeActiveMenu, selectActiveMenuItem } from '../../app/slice'

const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const activeMenuItem = useAppSelector(selectActiveMenuItem)

  const handleClick = (item: MenuItem) => {
    dispatch(changeActiveMenu(item.key))
    navigate(item.path)
  }

  return (
    <div className={classes.container}>
      <div className={classes.contentRight}>
        <Logo />
        <div className={classes.listMenuContainer}>
          {Object.values(LIST_MENU).map((item, index) => {
            return (
              <div
                onClick={() => handleClick(item)}
                key={index}
                className={[
                  classes.menuItem,
                  `${activeMenuItem === item.key ? classes.activeItem : ''}`,
                ].join(' ')}
              >
                <p>{item.title}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <UserInfo />
      </div>
    </div>
  )
}

export default Header
