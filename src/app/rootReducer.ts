import { combineReducers } from '@reduxjs/toolkit'
import { HomePageReducer } from '../pages/Home/store/slice'

const rootReducer = combineReducers({
  homePage: HomePageReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer
