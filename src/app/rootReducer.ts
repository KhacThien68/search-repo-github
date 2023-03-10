import { combineReducers } from '@reduxjs/toolkit'
import { DetailPageReducer } from '../pages/DetailPage/store/slice'
import { HomePageReducer } from '../pages/Home/store/slice'
import { StoreReducer } from './slice'

const rootReducer = combineReducers({
  store: StoreReducer,
  homePage: HomePageReducer,
  DetailPage: DetailPageReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
