//3.Créer un slice qui va contenir les reducers et les actions
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Creer une interrface pour typer l'etatt(string dans notre cas)
interface stateType {
    value: string;
}
// Attrbuer le type à l'etat initial
const initialState: stateType = {
    value: ''
}

const inputReducer = createSlice({
    name:"input",
    initialState,
    reducers:{
        //Une action
        setInput: (state,action: PayloadAction<string>)=>{
            state.value = action.payload
        }
    }
})

//exporter le reducer 
export default inputReducer.reducer
//exporter les actions
export const {setInput} = inputReducer.actions

