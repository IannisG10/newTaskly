import { createSlice } from "@reduxjs/toolkit/react";
import type { PayloadAction } from "@reduxjs/toolkit";

interface DataType {
    _id: number;
    desc: string;
    tags: string;
    date: string;
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
            // const item = state.data.find(item => item._id === action.payload)
            // if (item){
            //     item.isCheck = !item.isCheck
            // }
            state.data = state.data.map(item => item._id === action.payload ? {...item,isCheck: item.isCheck} : item)
        }
        
    },
});

export default dataSlice.reducer;
export const { setData,toggleData } = dataSlice.actions