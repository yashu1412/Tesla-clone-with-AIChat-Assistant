// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
// import profileReducer from './slices/profileSlice';

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     profile: profileReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch; 
// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
