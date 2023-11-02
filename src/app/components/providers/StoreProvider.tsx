'use client';

import { Provider } from 'react-redux';

import { store } from '@/redux/store';

type StoreProviderProps = {
  children: React.ReactNode;
};

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
