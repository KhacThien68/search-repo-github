import { createAsyncThunk } from '@reduxjs/toolkit'
import HomePageServiceExport from './service'

export const getRepositories = createAsyncThunk(
  'getRepositories',
  async (params, { rejectWithValue }) => {
    const response: any = await HomePageServiceExport.getRepositories(params)
    if (response.success) {
      return response.data
    }
    return rejectWithValue(response.errors)
  },
)
