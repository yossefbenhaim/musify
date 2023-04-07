import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';

import statusSlider from './slice/statusSlider';
const store = configureStore({
    reducer: {
        nameUser: userSlice,
        statusSlider: statusSlider,
    },
});

export type UserStor = ReturnType<typeof store.getState>;

export type statusSlider = ReturnType<typeof store.getState>;

export default store;
