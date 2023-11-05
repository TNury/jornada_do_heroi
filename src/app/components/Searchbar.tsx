'use client';

import { update } from '@/redux/slices/searchSlice';
import { useAppDispatch } from '@/redux/store';

const SearchBar = () => {
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
      className='w-64 border-2 border-black p-4 text-xl placeholder:opacity-60'
      placeholder='Procure por nome ou raça...'
    />
  );
};

export default SearchBar;
