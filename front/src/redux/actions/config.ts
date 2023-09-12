/* eslint-disable @typescript-eslint/no-explicit-any */
import store from "../store";
import * as configSlice from "../slices/config";

export const setAccess = (value: any) => {
  store.dispatch(configSlice.setAccess(value));
};
