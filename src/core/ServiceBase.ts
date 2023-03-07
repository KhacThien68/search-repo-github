export class ServiceBase {
  getData = (promiseAction: any) => {
    return new Promise((resolve, reject) => {
      promiseAction()
        .then((res: any) => {
          if (!res || res.status === 204) {
            return resolve({})
          }
          return resolve(res.data)
        })
        .catch((err: any) => {
          return reject(err)
        })
    })
  }
}
