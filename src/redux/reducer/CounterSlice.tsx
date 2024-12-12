import { createSlice } from "@reduxjs/toolkit/react";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface DataType {
    _id: number;
    desc: string;
    tags: string[];
    date: string | undefined;
    isCheck: boolean;
}
interface DataState {
    data: DataType[];
    dataDel: DataType[];
    status: string;
    error: string | null
}

const initialState: DataState = {
    data: [],
    dataDel: [],
    status: "idle",
    error: null
}

export const fetchData = createAsyncThunk(
    "data/fetchData",
    async ()=>{
        try{
            const response = await fetch("https://api-newtaskly.onrender.com/data")
            const data = response.json()
            return data;
        }catch(err){
            console.error("Error when reading data",err)
        }
    }
)

export const saveData = createAsyncThunk(
    "data/saveData",
    async (data: DataType)=>{
        const response = await fetch("https://api-newtaskly.onrender.com/data",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const datas = await response.json()

        return datas
    }
)

export const updateData = createAsyncThunk(
    "data/updateData",
    async ({id,data}: {id: number, data: any})=>{
        const response = await fetch(`https://api-newtaskly.onrender.com/data/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const datas = response.json()
        return {id,updatedData: datas}
        
    }
)




const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: (state,action: PayloadAction<any>) => {
            state.data = action.payload
        },
        //modifie la valeur de isCheck
        toggleData: (state,action: PayloadAction<number>) => {
            const item = state.data.find(item => item._id === action.payload)
            if (item){
                item.isCheck = !item.isCheck
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.data = action.payload
        });
        builder.addCase(saveData.fulfilled,(state,action)=>{
            state.data.push(action.payload)
        });
        builder.addCase(updateData.fulfilled,(state,action: PayloadAction<{id: number,updatedData: any}>)=>{
            const item = state.data.findIndex(item => item._id === action.payload.id)
            state.data[item] = {...state.data[item],...action.payload.updatedData}
            
        })
    }
});

export default dataSlice.reducer;
export const { setData,toggleData } = dataSlice.actions
