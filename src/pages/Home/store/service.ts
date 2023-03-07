
import { ServiceBase } from '../../../core/ServiceBase'
import HomePage from './proxy'

class HomePageService extends ServiceBase {
  getRepositories(params: any) {
    return this.getData(() => HomePage.getRepositories(params))
  }
}

const HomePageServiceExport = new HomePageService()

export default HomePageServiceExport
