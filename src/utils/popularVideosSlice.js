import { createSlice } from "@reduxjs/toolkit";

const popularVideosSlice = createSlice({
    name : 'popularvideos',
    initialState : {
        popularVideos : null,
    },
    reducers : {
        addPopularVideos : (state, action) => {
            state.popularVideos = action.payload
        }
    }
});

export const {addPopularVideos} = popularVideosSlice.actions;

export default popularVideosSlice.reducer;