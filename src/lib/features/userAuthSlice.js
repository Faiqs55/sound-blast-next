const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    user: null,
    isLoggedIn: false
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true
        },

        logoutUser: (state) => {
            localStorage.removeItem('token');
            state.user = null;
            state.isLoggedIn = false;
        }
    }
});

export const {setUser, logoutUser} = userSlice.actions;
export const userReducer = userSlice.reducer;
