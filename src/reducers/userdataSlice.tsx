import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { getUsernameLS } from '../services/LocalData'

export interface userdataType {
    username: String | undefined
}

const initialState = (): userdataType => {
    let username = getUsernameLS();
    if (username) {
        return {username: username}
    } else {
        return {username: ''}
    }
}

export const userDataSlice = createSlice({
    name: 'user',
    initialState: initialState(),
    reducers: {
        setUsername: (state, action:PayloadAction<string>) => {
            state.username = action.payload
        }
    }
})

export const { setUsername } = userDataSlice.actions
export default userDataSlice.reducer
