//3.Créer un slice qui va contenir les reducers et les actions
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Creer une interrface pour typer l'etatt(string dans notre cas)
interface stateType {
    description: string;
    tag: string;
}
// Attrbuer le type à l'etat initial
const initialState: stateType = {
    description: '',
    tag: ''
}

const inputReducer = createSlice({
    name:"input",
    initialState,
    reducers:{
        //Une action
        setInput: (state,action: PayloadAction<string>)=>{
            state.description = action.payload
        },
        setTag: (state,action: PayloadAction<string>) => {
            state.tag = action.payload
        }
    }
})

//exporter le reducer 
export default inputReducer.reducer
//exporter les actions
export const {setInput,setTag} = inputReducer.actions

