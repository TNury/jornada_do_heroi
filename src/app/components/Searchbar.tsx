'use client';

import { update } from '@jdh/redux/slices/searchSlice';
import { useAppDispatch } from '@jdh/redux/store';

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
      className='p-4 text-xl md:text-3xl w-full placeholder:opacity-60 outline-none'
      placeholder='Procure por nome ou raça...'
    />
  );
};

export default SearchBar;
