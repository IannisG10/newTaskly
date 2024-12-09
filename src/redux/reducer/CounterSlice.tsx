import { createSlice } from "@reduxjs/toolkit/react";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DataType {
    _id: number;
    desc: string;
    tags: string[];
    date: string | undefined;
    isCheck: boolean;
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
        toggleData: (state,action: PayloadAction<number>) => {
            const item = state.data.find(item => item._id === action.payload)
            if (item){
                item.isCheck = !item.isCheck
            }
        }
        
    },
});

export default dataSlice.reducer;
export const { setData,toggleData } = dataSlice.actions