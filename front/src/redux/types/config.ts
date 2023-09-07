/* eslint-disable @typescript-eslint/no-explicit-any */
interface Config {
    access: unknown,
    auth: IAuth
}

export interface IAuth {
    id: any,
    token: any
}
export default Config;