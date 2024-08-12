import { configureStore } from "@reduxjs/toolkit";
import breadCrumpReducer from "./slice/BreadCrumpSlice";

export default configureStore({
    reducer: {
        breadCrumbs: breadCrumpReducer
    }
})