import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name : 'config',
    initialState : {
        isSideBarView : true,
        cachedData : {}
    },
    reducers :  {
        addSidebarState : (state,action) => {
            state.isSideBarView = !state.isSideBarView
        },
        closeSideBar : (state,action) => {
            state.isSideBarView = !action.payload
        },
        cachedSuggestions : (state,action) => {
            state.cachedData = Object.assign(state.cachedData,action.payload);
        },
    }
});

export const {addSidebarState,closeSideBar,cachedSuggestions} = configSlice.actions;

export default configSlice.reducer;