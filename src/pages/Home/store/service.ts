
import { ServiceBase } from '../../../core/ServiceBase'
import HomePage from './proxy'

class HomePageService extends ServiceBase {
  getUsers(params: any) {
    return this.getData(() => HomePage.getUsers(params))
  }
}

const HomePageServiceExport = new HomePageService()

export default HomePageServiceExport
