import { createTheme } from '@mui/material';

export const theme = createTheme({
  shadows: ['none'],
  palette: {
    primary: {
      main: '#436ee',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 400,
    },
  },
});
