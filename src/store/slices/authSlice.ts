// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface User {
//   id: string;
//   first_name: string;
//   last_name: string;
//   email: string;
//   region?: string;
//   language?: string;
//   role: string;
//   created_at: string;
// }

// interface AuthState {
//   token: string | null;
//   user: User | null;
// }

// const initialState: AuthState = {
//   token: null,
//   user: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setToken: {
//       reducer: (state, action: PayloadAction<string | null>) => {
//         state.token = action.payload;
//       },
//       prepare: (token: string | null) => ({ payload: token }),
//     },
//     clearToken: (state) => {
//       state.token = null;
//       state.user = null;
//     },
//     setUser: {
//       reducer: (state, action: PayloadAction<User | null>) => {
//         state.user = action.payload;
//       },
//       prepare: (user: User | null) => ({ payload: user }),
//     },
//   },
// });

// export const { setToken, clearToken, setUser } = authSlice.actions;
// export type { User, AuthState };
// export default authSlice.reducer; 

// src/store/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  region?: string;
  language?: string;
  role: string;
  created_at: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setUser } = authSlice.actions;
export default authSlice.reducer;
