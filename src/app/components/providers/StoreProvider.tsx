'use client';

import { Provider } from 'react-redux';

import { store } from '@jdh/redux/store';

type StoreProviderProps = {
  children: React.ReactNode;
};

/**
 * Provides the redux store to the application.
 * @param props The component props.
 * @returns JSX.Element
 */
export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
