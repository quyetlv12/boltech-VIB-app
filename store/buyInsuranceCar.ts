import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface BuyInsuranceCarState {
  activeStep: number;
  stepData: any;
  type: any;
  step0data: object;
  step_1 : object,
  step_2 : object,
  step_3 :object
}

export const initialState: BuyInsuranceCarState = {
  activeStep: 0,
  stepData: null,
  type: null,
  step0data: {},
  step_1 : {},
  step_2 : {},
  step_3 : {}
};

const buyInsuranceCar = createSlice({
  name: "buyInsuranceCar",
  initialState,
  reducers: {
    // selectInsuraneBuy: (
    //   state: Draft<typeof initialState>,
    //   action: PayloadAction<typeof initialState>
    // ) => {
    //   state.type = action.payload.type;
    //   state.step0data = action.payload;
    // },
    // backStep: (
    //   state: Draft<typeof initialState>,
    //   action: PayloadAction<typeof initialState>
    // ) => {
    // //    state.step = action.payload 
    // },
    // nextStep: (
    //   state: Draft<typeof initialState>,
    //   action: PayloadAction<typeof initialState>
    // ) => {},
    // resetStepData : (state: Draft<typeof initialState>,
    //     action: PayloadAction<typeof initialState>) => {
    //         state.step = 0;
    //         state.stepData = null;
    //         state.type = null;
    //         state.step0data = {};
    //     }
  },
});
// Selectors
// export const getUser = (state:any) => state.availableProducts;
// export const getStep = (state: any) => state.buyInsurance.step;
// export const getTypeInsurance = (state: any) => state.buyInsurance.type;
// export const getStep0data  = (state: any) => state.buyInsurance.step0data;

// Reducers and actions
export const { } = buyInsuranceCar.actions;
export default buyInsuranceCar.reducer;
