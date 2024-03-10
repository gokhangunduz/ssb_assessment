import { createSlice } from "@reduxjs/toolkit";
import { IData, IStageDataIndex } from "../interfaces/data.interface";
import { toast } from "sonner";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    datas: [] as IData[],
    stageDataIndex: null as IStageDataIndex,
  },
  reducers: {
    reducerAddData: (state, action) => {
      const data = action.payload as IData;
      state.datas.push(data);
      toast.success("Data added successfully.");
    },
    reducerUpdateData: (state, action) => {
      const { index, data } = action.payload as { index: number; data: IData };
      state.datas[index] = data;
      toast.success("Data updated successfully.");
    },
    reducerRemoveData: (state, action) => {
      const index = action.payload as number;
      state.datas.splice(index, 1);
      toast.success("Data removed successfully.");
    },
    reducerAddStageDataIndex: (state, action) => {
      state.stageDataIndex = action.payload as number;
      toast.info("You can update this data now.");
    },
    reducerRemoveStageDataIndex: (state) => {
      state.stageDataIndex = null;
    },
  },
});

export const {
  reducerAddData,
  reducerUpdateData,
  reducerRemoveData,
  reducerAddStageDataIndex,
  reducerRemoveStageDataIndex,
} = counterSlice.actions;

export default counterSlice.reducer;
