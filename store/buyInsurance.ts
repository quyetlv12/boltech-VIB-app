import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface BuyInsuranceState {
  step: number;
  stepData: any;
  type: any;
  step0data: object;
  contractId : string,
  step_1 : object ,
  step_2 : object ,
  step_3 : object ,
}

export const initialState: BuyInsuranceState = {
  step: 0,
  stepData: {},
  contractId : "",
  step_1 : {},
  step_2 : {},
  step_3 : {},
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
       state.step = action.payload.step
    },
    nextStep: (
      state: Draft<typeof initialState>,
      action: PayloadAction<any>
    ) => {
      console.log(initialState);
      if (initialState.step === 0) {
        let _step = initialState.step
        _step = _step++
        console.log("step" , _step);
        
      }      
    },
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
export const { selectInsuraneBuy , backStep , nextStep , resetStepData } = buyInsurance.actions;
export default buyInsurance.reducer;
