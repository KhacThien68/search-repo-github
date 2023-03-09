import React from 'react'
import Footer from './footer'
import Header from './header'
import classes from './index.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={classes.layoutContainer}>
      <Header />
      <main className={classes.mainContent}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
