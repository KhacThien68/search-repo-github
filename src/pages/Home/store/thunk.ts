import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetReposParams } from './interfaces'
import HomePageServiceExport from './service'

export const getRepositories = createAsyncThunk(
  'getRepositories',
  async (params: GetReposParams, { rejectWithValue }) => {
    const response: any = await HomePageServiceExport.getRepositories(params)
    if (response.total_count) {
      return response
    }
    return rejectWithValue(response.errors)
  },
)
