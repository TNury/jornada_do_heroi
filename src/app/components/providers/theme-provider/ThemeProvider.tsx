'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import NextAppDirEmotionCacheProvider from '@jdh/components/providers/theme-provider/EmotionCache';

import theme from '@jdh/theme/theme';

/**
 * Provides the MUI theme to the application.
 * @param props The component props.
 * @returns JSX.Element
 */
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
