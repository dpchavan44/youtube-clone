import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./configSlice";
import popularVideosSlice from "./popularVideosSlice";
import videoCategoriesSlice from "./videoCategoriesSlice";

const appStore = configureStore({
    reducer : {
        config : configSlice,
        popularvideos : popularVideosSlice,
        videocategories : videoCategoriesSlice
    }
});

export default appStore;