
import { ServiceBase } from '../../../core/ServiceBase'
import { GetDetailUserParams } from './interfaces'
import DetailUser from './proxy'

class DetailUserService extends ServiceBase {
  getDetailUser(params: GetDetailUserParams) {
    return this.getData(() => DetailUser.getDetailUser(params))
  }
}

const DetailUserServiceExport = new DetailUserService()

export default DetailUserServiceExport
