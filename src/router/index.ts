import { lazy } from 'react'
import { ROUTER, RouterProps } from './config'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
// const DetailRepoUser = lazy(() => import('../pages/DetailPage'))

export const PUBLIC_ROUTERS: RouterProps[] = [
  {
    path: ROUTER.HOME_PAGE,
    element: Home,
  },
  {
    path: ROUTER.ABOUT_PAGE,
    element: About,
  },
  // {
  //   path: ROUTER.DETAIL_REPO_PAGE,
  //   element: DetailRepoUser,
  // },
]
