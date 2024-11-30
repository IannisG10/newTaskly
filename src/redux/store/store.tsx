import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "../reducer/CounterSlice"

//1.Configurer le store qui va contenir l'etat global de l'application
const store = configureStore({
    reducer: {
        input: inputReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch