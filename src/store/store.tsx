import { configureStore } from "@reduxjs/toolkit";
import { generalApi } from "../services/generalApi";
import usersReducer from "../slices/usersSlice";

export const store = configureStore({
    reducer: {        
        users: usersReducer,
        [generalApi.reducerPath]: generalApi.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(generalApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch