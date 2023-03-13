import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/store'
import { DetailPageSate } from './interfaces'
import { getDetailUser } from './thunk'

export const slice = createSlice({
  name: 'DetailPage',
  initialState: {
    repoList: [],
    isLoading: false,
  } as DetailPageSate,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetailUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getDetailUser.fulfilled, (state, action) => {
      state.isLoading = false
      const data = action.payload
      state.repoList = data
    })
    builder.addCase(getDetailUser.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const selectRepoList = (state: RootState) => state[slice.name].repoList
export const selectIsLoading = (state: RootState) => state[slice.name].isLoading

export const DetailPageReducer = slice.reducer
