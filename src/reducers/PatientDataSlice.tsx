import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { patientDataInterface } from '../Interface/PatientDataInterface'

const initialPatientData: patientDataInterface = {
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    ethinicity: "",
      street: "",
      state: "",
      city: "",
      insuranceId: "",
      memberId: "",
      insuranceProvider: "",
};

  export const patientDataSlice = createSlice({
    name: "patientData",
    initialState: {
      data: initialPatientData,
    },
    reducers: {
      addPatientData: (
        state,
        action: PayloadAction<patientDataInterface>,
      ) => {
        state.data = action.payload;
      },
    },
  });

export const { addPatientData } = patientDataSlice.actions;
export default patientDataSlice.reducer;