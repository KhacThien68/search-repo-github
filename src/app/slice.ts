import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

export const slice = createSlice({
  name: 'store',
  initialState: {
    activeMenuItem: 0,
  },
  reducers: {
    changeActiveMenu: (state, action) => {
      state.activeMenuItem = action.payload
    },
  },
})

export const selectActiveMenuItem = (state: RootState) =>
  state[slice.name].activeMenuItem

export const { changeActiveMenu } = slice.actions

export const StoreReducer = slice.reducer
