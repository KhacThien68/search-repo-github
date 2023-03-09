import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetUsersParams } from './interfaces'
import HomePageServiceExport from './service'

export const getUsers = createAsyncThunk(
  'getUsers',
  async (params: GetUsersParams, { rejectWithValue }) => {
    const response: any = await HomePageServiceExport.getUsers(params)
    if (response.total_count) {
      return response
    }
    return rejectWithValue(response.errors)
  },
)
