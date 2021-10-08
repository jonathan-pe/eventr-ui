import { ThemeOptions } from '@mui/material'

export const darkTheme: ThemeOptions = {
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#FCA311',
    },
    secondary: {
      main: '#e5e5e5',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#000000',
      paper: '#14213d',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: true,
      },
    },
  },
}

export const lightTheme: ThemeOptions = {
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#FCA311',
    },
    secondary: {
      main: '#14213D',
    },
    error: {
      main: '#f44336',
    },
  },
}
