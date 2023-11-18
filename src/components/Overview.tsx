import styles from './overview.module.css';
import CurrentTeamOverview from './CurrentTeamOverview';
import FightersOverview from './FightersOverview';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Darktheme to show material UI pagination component in FightersOverview.tsx
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Overview() {
  return (
    <div className={styles.overviewContainer}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <FightersOverview />
        <CurrentTeamOverview />
      </ThemeProvider>
    </div>
  );
}
