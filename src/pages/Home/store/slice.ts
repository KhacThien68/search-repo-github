import { createSlice } from '@reduxjs/toolkit'
import { register } from '../../../components/helpers/reducerRegistry'
import { getRepositories } from './thunk'

const slice = createSlice({
  name: 'homePage',
  initialState: {
    data: [],
    page: 1,
    isLoading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRepositories.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getRepositories.fulfilled, (state, action) => {
      state.isLoading = false
      const data = action.payload
      state.data = data
      
    })
    builder.addCase(getRepositories.rejected, (state) => {
      state.isLoading = false
    })
  },
})

register(slice.name, slice.reducer)
