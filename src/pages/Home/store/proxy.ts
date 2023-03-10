import ProxyBase from "../../../core/ProxyBase"

export class HomePageProxy extends ProxyBase {
  getUsers(params: any) {
    return this.get('search/users', params)
  }
}

const HomePage = new HomePageProxy(
  `${process.env.REACT_APP_SERVICE_ENDPOINT}`,
)

export default HomePage
