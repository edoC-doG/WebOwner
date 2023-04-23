import { creatSlice } from '@reduxjs/toolkit';

const initialState = {
    model : "dark"
};

export const globalSlice = creatSlice ({
    name: 'global',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark': 'light';  
        }
    }
})

export const { setMode } = globalSlice.actions;

export default globalSlice.reducers;