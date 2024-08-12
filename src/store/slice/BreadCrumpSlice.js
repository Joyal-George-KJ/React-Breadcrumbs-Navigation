import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    path: ['Home']
};

export const BreadCrumpSlice = createSlice({
    name: "Bread Crump",
    initialState,
    reducers: { 
        setCrumps: (state, action) => {
            const { path, ...extras } = action.payload;
            if ( extras.operation === 'append' ) {
                state.path.push(action.payload);
            } else {
                state.path[extras.operation] = path;
                state.path.length = extras.operation + 1;
                window.localStorage.setItem('currentPath', JSON.stringify(state.path))
            }
        }
    },
});

export const { setCrumps } = BreadCrumpSlice.actions;
export default BreadCrumpSlice.reducer;