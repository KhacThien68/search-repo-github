import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/store'
import { HomePageState } from './interfaces'
import { getUsers } from './thunk'

export const slice = createSlice({
  name: 'homePage',
  initialState: {
    data: [],
    page: 1,
    pageSize: 10,
    isLoading: false,
    totalRecords: 0,
    searchCharacters: '',
  } as HomePageState,
  reducers: {
    changeData: (state, action) => {
      state.data = action.payload
    },
    changeSearchCharacters: (state, action) => {
      state.searchCharacters = action.payload
    },
    changePage: (state, action) => {
      state.page = action.payload
    },
    changePageSize: (state, action) => {
      state.pageSize = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false
      const data = action.payload
      state.data = data.items

      state.totalRecords = data.total_count || 0
    })
    builder.addCase(getUsers.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const selectTotalRecords = (state: RootState) =>
  state[slice.name].totalRecords
export const selectData = (state: RootState) => state[slice.name].data
export const selectPage = (state: RootState) => state[slice.name].page
export const selectPageSize = (state: RootState) => state[slice.name].pageSize
export const selectSearchCharacters = (state: RootState) =>
  state[slice.name].searchCharacters

export const {
  changeData,
  changeSearchCharacters,
  changePage,
  changePageSize,
} = slice.actions

export const HomePageReducer = slice.reducer
