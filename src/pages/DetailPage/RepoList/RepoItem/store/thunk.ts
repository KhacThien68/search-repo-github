import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetReadMeParams } from './interfaces'
import ReadMeDetailServiceExport from './service'

export const getReadMeDetail = createAsyncThunk(
  'getReadMeDetail',
  async (params: GetReadMeParams, { rejectWithValue }) => {
    const response: any = await ReadMeDetailServiceExport.getReadMeDetail(
      params,
    )
    if (response) {
      return response
    }
    return rejectWithValue(response.errors)
  },
)
