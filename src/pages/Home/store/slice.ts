import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/store'
import { HomePageState } from './interfaces'
import { getRepositories } from './thunk'

export const slice = createSlice({
  name: 'homePage',
  initialState: {
    data: [],
    page: 1,
    pageSize: 10,
    isLoading: false,
    totalRecords: 0,
  } as HomePageState,
  reducers: {
    changeData: (state, action) => {
      state.data = action.payload
    },
    changePage: (state, action) => {
      state.page = action.payload
    },
    changePageSize: (state, action) => {
      state.pageSize = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRepositories.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getRepositories.fulfilled, (state, action) => {
      state.isLoading = false
      const data = action.payload
      state.data = data.items

      state.totalRecords = data.total_count || 0
    })
    builder.addCase(getRepositories.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const selectTotalRecords = (state: RootState) =>
  state[slice.name].totalRecords
export const selectData = (state: RootState) => state[slice.name].data
export const selectPage = (state: RootState) => state[slice.name].page
export const selectPageSize = (state: RootState) => state[slice.name].pageSize

export const { changeData, changePage, changePageSize } = slice.actions

export const HomePageReducer = slice.reducer
