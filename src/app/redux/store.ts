import { configureStore } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import combatSlice from '@jdh/redux/slices/combatSlice';
import searchSlice from '@jdh/redux/slices/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    combat: combatSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
