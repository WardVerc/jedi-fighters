'use client';
import styles from './page.module.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FighterDetail from '@/components/FighterDetail/FighterDetail';
import CurrentTeamOverview from '@/components/CurrentTeamOverview/CurrentTeamOverview';

// Darktheme for Material UI components
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

interface FighterDetailPageProps {
  params: {
    id: number;
  };
}

export default function FighterDetailPage({
  params: { id },
}: FighterDetailPageProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={styles.main}>
        <FighterDetail id={id} />
        <CurrentTeamOverview />
      </div>
    </ThemeProvider>
  );
}
