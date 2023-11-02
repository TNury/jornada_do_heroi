'use client';

import { update } from '@/redux/slices/searchSlice';
import { useAppDispatch } from '@/redux/store';

import TextField from '@mui/material/TextField';

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
    <TextField
      id='outlined-basic'
      placeholder='Search by name or race'
      variant='outlined'
      onChange={handleOnChange}
    />
  );
};

export default SearchBar;
