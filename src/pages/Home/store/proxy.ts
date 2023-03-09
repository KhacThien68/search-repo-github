import ProxyBase from "../../../core/ProxyBase"

export class HomePageProxy extends ProxyBase {
  getRepositories(params: any) {
    return this.get('', params)
  }
}

const HomePage = new HomePageProxy(
  `${process.env.REACT_APP_SERVICE_ENDPOINT}`,
)

export default HomePage
