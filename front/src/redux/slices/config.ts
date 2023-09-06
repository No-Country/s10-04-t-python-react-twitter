import { createSlice } from "@reduxjs/toolkit"
import Config from "../types/config"

const initialState: Config = {
    access: [],
    auth: {
        id: null,
        token: null,
    }
}

const configSlice = createSlice({
    name:'config',
    initialState,
    reducers: {
        setAccess: (state,action) => {
            state.access = action.payload
        },
        setAuthId: (state,action) => {
            state.auth.id = action.payload
        }
    }
})

export const {
    setAccess,
    setAuthId
} = configSlice.actions

export default configSlice.reducer;
