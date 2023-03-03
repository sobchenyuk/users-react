import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getUsers} from "./usersApi";
import {RootState} from "../../app/store";
import {IUser} from "./types";

interface IUserState {
    usersList: IUser[]
}

const initialState: IUserState = {
    usersList: [],
};

export const getAllUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        return await getUsers();
    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled,(state, action) => {
            state.usersList = action?.payload;
        })
    }
})

export const selectUsers = (state: RootState) => state.users.usersList;

export default usersSlice.reducer;
