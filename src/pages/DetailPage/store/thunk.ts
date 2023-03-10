import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetDetailUserParams } from './interfaces'
import DetailUserServiceExport from './service'

export const getDetailUser = createAsyncThunk(
  'getDetailUser',
  async (params: GetDetailUserParams, { rejectWithValue }) => {
    const response: any = await DetailUserServiceExport.getDetailUser(params)
    if (response) {
      console.log(response)
      
      return response
    }
    return rejectWithValue(response.errors)
  },
)
