import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UsersDeets {
    firstName: string;
    lastName: string;
    address: string;
    image: string;
    phone: string
    gender: string;
    dateOfBirth: string|any;
    emailAddress: string;
} 
interface UsersProps {
    users: Array<UsersDeets>,
    id: number
} 
const initialState:UsersProps = {
    users: [],
    id: 0
};

export const usersSlice:any = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state: UsersProps, action: PayloadAction<any>) => {
            state.users = action.payload;
        },
        setID: (state: UsersProps, action: PayloadAction<any>) => {
            state.id = action.payload;
        }
    }
});

export const { setUsers, setID } = usersSlice.actions;

export const selectUsers = (state: any) => state.users;
export const selectID = (state: any) => state.id;

export default usersSlice.reducer;