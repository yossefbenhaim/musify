import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StatusSlider {
    status: boolean;
}

const initialState: StatusSlider = {
    status: false,
};

const StatusSlider = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        changeStatus(state, action: PayloadAction<boolean>) {
            state.status = action.payload;
        },
        currentSlider(state) {
            state.status = initialState.status;
        },
    },
});

export const { currentSlider, changeStatus } = StatusSlider.actions;

export default StatusSlider.reducer;
