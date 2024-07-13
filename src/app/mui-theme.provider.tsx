'use client';

import { ThemeProvider, createTheme } from '@mui/material';

export default function MuiThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    typography: {
      fontFamily: 'var(--font-roboto)',
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
