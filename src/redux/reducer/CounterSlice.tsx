import { createSlice } from "@reduxjs/toolkit/react";
import type { PayloadAction } from "@reduxjs/toolkit";

interface DataType {
    _id: number;
    desc: string;
    tags: string;
    date: string;
}
interface DataState {
    data: DataType[];
}
const initialState: DataState = {
    data: []
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: (state,action: PayloadAction<any>) => {
            state.data = action.payload
        },
    },
});

export default dataSlice.reducer;
export const {setData} = dataSlice.actions