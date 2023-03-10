import ProxyBase from '../../../../../core/ProxyBase'
import { GetReadMeParams } from './interfaces'

export class ReadMeDetailProxy extends ProxyBase {
  getReadMeDetail(params: GetReadMeParams) {
    return this.get(params.url)
  }
}

const ReadMeDetail = new ReadMeDetailProxy(
  `${process.env.REACT_APP_SERVICE_ENDPOINT}`,
)

export default ReadMeDetail
