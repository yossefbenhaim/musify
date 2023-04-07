import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SongIsPlayed {
    id: string;
}

const initialState: SongIsPlayed = {
    id: '',
};

const songIsPlayed = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        setSongPlayes: (
            state,
            action: PayloadAction<{
                id: string;
            }>
        ) => {
            state.id = action.payload.id;
        },
        currentUser(state) {
            state.id = initialState.id;
        },

        currentSongPlayes(state) {
            state.id = initialState.id;
        },
    },
});

export const { setSongPlayes, currentSongPlayes } = songIsPlayed.actions;

export default songIsPlayed.reducer;
