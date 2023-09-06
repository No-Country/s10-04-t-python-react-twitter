import store from "../store";
import * as configSlice from "../slices/config"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setAccess = (value: any) => {
    store.dispatch(configSlice.setAccess(value))
}