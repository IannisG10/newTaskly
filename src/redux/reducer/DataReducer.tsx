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
    trash: DataType[];
    loaders: boolean;
}

const initialState: DataState = {
    data: [],
    trash: [],
    loaders: false,
}

export const fetchData = createAsyncThunk(
    "data/fetchData",
    async ()=>{
        try{
            const response = await fetch("https://mytaskly.onrender.com/task",{
                method: 'GET',
            })
            const data = await response.json()
            return data;
        }catch(err){
            console.error("Error when reading data",err)
        }
    }
)

export const saveData = createAsyncThunk(
    "data/saveData",
    async (data: DataType)=>{
        const response = await fetch("https://mytaskly.onrender.com/task",{
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
    async ({id,data}: {id: number,data: boolean})=> {
        const response = await fetch(`https://mytaskly.onrender.com/task/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isCheck: data
            })
        })
        const datas = await response.json();
        // retourne la réponse modifié du serveur
        return {datas,id};
    }
)

export const DataDel = createAsyncThunk(
    "data/deleteData",
    async (id: number) => {
        const response = await fetch(`https://mytaskly.onrender.com/task/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const datas = await response.json()
        return datas
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
        },
        trashedData: (state,action: PayloadAction<number>) => {
            const item = state.data.find(item => item._id === action.payload)
            if(item){
                state.trash.push(item)
                
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.loaders = false
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.loaders = true
            state.data = action.payload
        });
        builder.addCase(saveData.fulfilled,(state,action)=>{
            state.data.push(action.payload)
        });
        builder.addCase(updateData.fulfilled,(state,action)=>{
            const index = state.data.findIndex(item => item._id === action.payload.id)

            state.data[index] = action.payload.datas
            // IMPORTANT : dispatch avec les parametre dans Tasklist
        });
        builder.addCase(DataDel.fulfilled,(state,action)=>{
            state.data = action.payload
        })
    }
});

export default dataSlice.reducer;
export const { setData,toggleData,trashedData } = dataSlice.actions
