
import { ServiceBase } from '../../../../../core/ServiceBase'
import { GetReadMeParams } from './interfaces'
import ReadMeDetail from './proxy'

class ReadMeDetailService extends ServiceBase {
  getReadMeDetail(params: GetReadMeParams) {
    return this.getData(() => ReadMeDetail.getReadMeDetail(params))
  }
}

const ReadMeDetailServiceExport = new ReadMeDetailService()

export default ReadMeDetailServiceExport
