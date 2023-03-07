import React from 'react'
import { Logo } from './logo'
import { UserInfo } from './userInfo'
import classes from './index.module.scss'

const Header = () => {
  return (
    <div className={classes.container}>
      <div>
        <Logo />
      </div>
      <div>
        <UserInfo />
      </div>
    </div>
  )
}

export default Header
