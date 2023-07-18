import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import useAppSelector from "../../../shared/utils/useAppSelector";

export interface IBoxState {
  boxList: string[];
}

const initialState = (): IBoxState => ({
  boxList: [],
});

export const boxModel = createSlice({
  name: "box",
  initialState: initialState(),
  reducers: {
    setBoxList: (state, { payload }: PayloadAction<string[]>) => {
      state.boxList = payload;
    },
    clearState: () => {
      initialState();
    },
  },
});

export const reducer = boxModel.reducer;

export const { setBoxList } = boxModel.actions;

export const useBoxList = () => useAppSelector((store) => store.box.boxList);
