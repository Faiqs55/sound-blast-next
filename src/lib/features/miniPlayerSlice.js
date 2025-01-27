import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currSong: null
}

const miniPlayerSlice = createSlice({
    name: 'miniPlayer',
    initialState,
    reducers: {
        playOnMiniPlayer: (state, action) => {
            state.currSong = action.payload;
        },
        stopOnMiniPlayer: (state, action) => {},
    }
});

export const {playOnMiniPlayer, stopOnMiniPlayer} = miniPlayerSlice.actions;
export default miniPlayerSlice.reducer;