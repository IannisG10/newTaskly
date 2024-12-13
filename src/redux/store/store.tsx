import { configureStore } from "@reduxjs/toolkit";
import DataReducer from '../reducer/CounterSlice'
import ThemeReducer from '../reducer/ThemeReducer'

//1.Configurer le store qui va contenir l'etat global de l'application
const store = configureStore({
    reducer: {
        data: DataReducer,
        theme: ThemeReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch