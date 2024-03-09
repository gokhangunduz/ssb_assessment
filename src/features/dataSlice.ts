import { createSlice } from "@reduxjs/toolkit";
import { IData } from "../interfaces/data.interface";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    datas: [] as IData[],
  },
  reducers: {
    reducerAddData: (state, action) => {
      const data = action.payload as IData;
      state.datas.push(data);
    },
  },
});

export const { reducerAddData } = counterSlice.actions;
export default counterSlice.reducer;
