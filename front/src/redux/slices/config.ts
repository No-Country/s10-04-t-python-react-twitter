import { createSlice } from "@reduxjs/toolkit"
import Config from "../types/config"

const initialState: Config = {
    access: []
}

const configSlice = createSlice({
    name:'config',
    initialState,
    reducers: {
        setAccess: (state,action) => {
            state.access = action.payload
        }
    }
})

export const {
    setAccess
} = configSlice.actions

export default configSlice.reducer;
