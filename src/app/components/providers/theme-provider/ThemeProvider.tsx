'use client';

import theme from '@/theme/theme';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import NextAppDirEmotionCacheProvider from '@/components/providers/theme-provider/EmotionCache';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
