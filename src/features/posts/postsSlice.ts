import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getPostsByUserId} from "./postsApi";
import {RootState} from "../../app/store";
import {IPosts} from "./types";

interface IPostsState {
    postsList: IPosts[]
}

const initialState: IPostsState = {
    postsList: [],
};

export const getPosts = createAsyncThunk(
    'posts/getAlbumsByUserId',
    async (userId: number) => {
        return await getPostsByUserId(userId);
    }
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled,(state, action) => {
            state.postsList = action?.payload;
        })
    }
})

export const selectPosts = (state: RootState) => state.posts.postsList;

export default postsSlice.reducer;
