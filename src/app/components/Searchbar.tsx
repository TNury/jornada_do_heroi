'use client';

import { update } from '@jdh/redux/slices/searchSlice';
import { useAppDispatch } from '@jdh/redux/store';

/**
 * Renders a simple input with search functionality.
 * @returns JSX.Element
 */
export const SearchBar = () => {
  const dispatch = useAppDispatch();

  let timeoutId: NodeJS.Timeout | null = null;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      dispatch(update(e.target.value));
    }, 500);
  };

  return (
    <input
      onChange={handleOnChange}
      className='w-full p-4 text-xl outline-none placeholder:opacity-60 md:text-3xl'
      placeholder='Procure por nome ou raça...'
    />
  );
};
