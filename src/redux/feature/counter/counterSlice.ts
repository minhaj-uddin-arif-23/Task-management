import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state,action) => {
      state.count += action.payload.amount;
    },
    Decreament : (state) =>{
      state.count -= 1
    },
    // increamentCount : (state,action) => {
    //   state.count +=action.payload
    // }
  },
});
export const {increament,Decreament} = counterSlice.actions
export default counterSlice.reducer;
