'use client';
import styles from './page.module.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FightersOverview from '@/components/FightersOverview/FightersOverview';
import CurrentTeamOverview from '@/components/CurrentTeamOverview/CurrentTeamOverview';

// Darktheme for Material UI components
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={styles.main}>
        <FightersOverview />
        <CurrentTeamOverview />
      </div>
    </ThemeProvider>
  );
}
