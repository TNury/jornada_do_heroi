import { Bangers } from 'next/font/google';

import { createTheme } from '@mui/material/styles';

const roboto = Bangers({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    // h6: {
    //   fontSize: '1rem',
    // },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: '2px solid black',
          borderRadius: '0px !important',
          fieldset: {
            backgroundColor: 'red',
            display: 'none',
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
