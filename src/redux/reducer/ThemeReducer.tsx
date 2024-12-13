import { createSlice } from "@reduxjs/toolkit";


interface ThemeType {
    theme: boolean;
}

const initialState: ThemeType = {
    theme: false
}

const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state)=>{
            state.theme = !state.theme
        }
    }
})

export default ThemeSlice.reducer;
export const {setTheme} = ThemeSlice.actions