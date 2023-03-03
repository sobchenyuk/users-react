import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAlbumsByUserId} from "./albumsApi";
import {RootState} from "../../app/store";
import {IAlbums} from "./types";

interface IAlbumsState {
    albumsList: IAlbums[]
}

const initialState: IAlbumsState = {
    albumsList: [],
};

export const getAlbums = createAsyncThunk(
    'albums/getAlbumsByUserId',
    async (userId: number) => {
        return await getAlbumsByUserId(userId);
    }
);

export const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAlbums.fulfilled,(state, action) => {
            state.albumsList = action?.payload;
        })
    }
})

export const selectAlbums = (state: RootState) => state.albums.albumsList;

export default albumsSlice.reducer;
