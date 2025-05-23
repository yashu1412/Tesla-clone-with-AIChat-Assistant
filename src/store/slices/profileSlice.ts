import { createSlice } from '@reduxjs/toolkit';

interface User {
  accountType?: string;
  // Add other user properties as needed
}

interface ProfileState {
  user: User | null;
}

const initialState: ProfileState = {
  user: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = profileSlice.actions;
export default profileSlice.reducer; 