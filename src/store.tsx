import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userdataSlice'
import patientDataReducer from './reducers/PatientDataSlice'

export const store = configureStore({
    reducer: {
        userReducer : userReducer,
        patientDataReducer : patientDataReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
