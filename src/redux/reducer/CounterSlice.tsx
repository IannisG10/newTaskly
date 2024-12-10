import { createSlice } from "@reduxjs/toolkit/react";
//import { createAsyncThunk } from "@reduxjs/toolkit";
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
    status: string;
    error: string | null
}

const initialState: DataState = {
    data: [],
    status: "idle",
    error: null
}
// interface UpdateDatasPayload {
//     data: boolean;
//     id: number;
// }

// const updateDatas = createAsyncThunk<any,UpdateDatasPayload>('data/updateDatas',
//     async ({data,id},thunkAPI)=>{
//         const dataToUpdate = {
//             isCheck: data
//         }
//         fetch(`https://api-newtaskly.onrender.com/data/${id}`,{
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(dataToUpdate)
//         })
//         .then(res => res.json())
//         .catch(err => thunkAPI.rejectWithValue(err.message))
//     })


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
    // extraReducers: (builder) => {
    //     builder
    //     .addCase(updateDatas.pending, (state) => {
    //         state.status = "loading"
    //         state.error = null
    //     }).addCase(updateDatas.fulfilled, (state,action)=>{
    //         const item = state.data.find(item => item._id === action.payload.id)
    //         item.isCheck = !item.isCheck
    //     })
    // }
});

export default dataSlice.reducer;
export const { setData,toggleData } = dataSlice.actions