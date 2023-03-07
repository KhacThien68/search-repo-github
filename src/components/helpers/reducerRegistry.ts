export let reducers = {}

export const register = (name: string, reducer: any) => {
  reducers = { ...reducers, [name]: reducer }
}
