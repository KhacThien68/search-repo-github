import React, { useState } from 'react'
import { Logo } from './logo'
import { UserInfo } from './userInfo'
import classes from './index.module.scss'
import { LIST_MENU } from './types'
import { useNavigate } from 'react-router-dom'
import { MenuItem } from '../../pages/Home/store/interfaces'

const Header = () => {
  const navigate = useNavigate()
  const [activeMenu, setActiveMenu] = useState(1)

  const handleClick = (item: MenuItem) => {
    setActiveMenu(item.key)
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
                  `${activeMenu === item.key ? classes.activeItem : ''}`,
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
