import { configureStore } from "@reduxjs/toolkit";
import { generalApi } from "../services/generalApi";

export const store = configureStore({
    reducer: {
        [generalApi.reducerPath]: generalApi.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(generalApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch