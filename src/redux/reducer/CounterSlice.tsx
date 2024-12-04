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
        toggleDataCheck: (state,action: PayloadAction<number>) => {
            // state.data.map((item) => item._id === action.payload ? {...item, isCheck: !item.isCheck} : item)
            const item = state.data.find(item => item._id === action.payload) 
            if(item){
                item.isCheck = !item.isCheck
            }
        }
    },
});

export default dataSlice.reducer;
export const { setData,toggleDataCheck } = dataSlice.actions