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
    body1: {
      'text-shadow': '2px 2px 0px black',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
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
