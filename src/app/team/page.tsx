'use client';
import React from 'react';
import styles from './page.module.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CurrentTeamOverview from '@/components/CurrentTeamOverview/CurrentTeamOverview';

// Darktheme for Material UI components
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function TeamPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={styles.main}>
        <CurrentTeamOverview showHomeButton />
      </div>
    </ThemeProvider>
  );
}
