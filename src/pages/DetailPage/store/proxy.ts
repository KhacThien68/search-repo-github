import ProxyBase from "../../../core/ProxyBase"
import { GetDetailUserParams } from "./interfaces"

export class DetailUserProxy extends ProxyBase {
  getDetailUser(params: GetDetailUserParams) {
    return this.get(params.url)
  }
}

const DetailUser = new DetailUserProxy(
  `${process.env.REACT_APP_SERVICE_ENDPOINT}`,
)

export default DetailUser
