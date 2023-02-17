import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface BuyInsuranceState {
  step: number;
  stepData: any;
  type: any;
  step0data: object;
}

export const initialState: BuyInsuranceState = {
  step: 0,
  stepData: null,
  type: null,
  step0data: {},
};

const buyInsurance = createSlice({
  name: "buyInsurance",
  initialState,
  reducers: {
    selectInsuraneBuy: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {
      state.type = action.payload.type;
      state.step0data = action.payload;
    },
    backStep: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {
    //    state.step = action.payload 
    },
    nextStep: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {},
    resetStepData : (state: Draft<typeof initialState>,
        action: PayloadAction<typeof initialState>) => {
            state.step = 0;
            state.stepData = null;
            state.type = null;
            state.step0data = {};
        }
  },
});
// Selectors
// export const getUser = (state:any) => state.availableProducts;
export const getStep = (state: any) => state.buyInsurance.step;
export const getTypeInsurance = (state: any) => state.buyInsurance.type;
export const getStep0data  = (state: any) => state.buyInsurance.step0data;

// Reducers and actions
export const { selectInsuraneBuy } = buyInsurance.actions;
export default buyInsurance.reducer;
