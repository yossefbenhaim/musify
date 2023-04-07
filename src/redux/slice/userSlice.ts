import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    name: string;
}

const initialState: User = {
    name: 'test',
};

const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeUser(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        currentUser(state) {
            state.name = initialState.name;
        },
    },
});

export const { currentUser, changeUser } = userSlice.actions;

export default userSlice.reducer;
