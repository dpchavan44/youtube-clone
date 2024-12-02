import { createSlice } from "@reduxjs/toolkit";


const videoCategorieSlice = createSlice({
    name : 'videocategories',
    initialState : {
        videoCategories : null,
        comments : null,
        shorts : null
    },
    reducers : {
        addVideoCategories : (state,action) => {
            state.videoCategories = action.payload;
        },
        clearVideoCategories : (state,action) => {
            state.videoCategories = null
        },
        appendVideoCategories : (state,action) => {
            state.videoCategories.items = Object.assign(state.videoCategories.items,action.payload.items);
            state.videoCategories.nextPageToken = action?.payload?.nextPageToken;
            return state.videoCategories;
        },
        addComments : (state,action) => {
            state.comments = action.payload
        },
        addShorts : (state,action) => {
            state.shorts = action.payload
        }
    }
});

export const {addVideoCategories,clearVideoCategories,appendVideoCategories,addComments,addShorts} = videoCategorieSlice.actions;

export default videoCategorieSlice.reducer;