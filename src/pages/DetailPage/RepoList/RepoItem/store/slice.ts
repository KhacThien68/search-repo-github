import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../../../app/store'
import { getReadMeDetail } from './thunk'

export const slice = createSlice({
  name: 'repoItem',
  initialState: {
    data: [],
    isLoading: false,
    readmeContent: '',
  },
  reducers: {
    changeReadmeContent: (state, action) => {
      state.readmeContent = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getReadMeDetail.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getReadMeDetail.fulfilled, (state, action) => {
      state.isLoading = false
      const data = action.payload
      
      state.readmeContent = data.content || ''
      
    })
    builder.addCase(getReadMeDetail.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const selectData = (state: RootState) =>
  state[slice.name].data
export const selectReadmeContent = (state: RootState) =>
  state[slice.name].readmeContent

export const {changeReadmeContent} = slice.actions

export const RepoItemReducer = slice.reducer
