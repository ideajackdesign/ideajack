import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Noto Sans JP", "Arial", sans-serif',
  },
  palette: {
    common: {
      black: '#151515',
    },
    primary: {
      main: '#4a36e8',
      light: '#7765ff',
      dark: '#2b19bc',
    },
    grey: {
      50: '#eceff1',
      100: '#cfd8dc',
      200: '#b0bec5',
      300: '#90a4ae',
      400: '#78909c',
      500: '#607d8b',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: theme.typography.pxToRem(20),
      [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.pxToRem(24),
      },
    },
    h2: {
      fontWeight: 500,
      fontSize: theme.typography.pxToRem(18),
      [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.pxToRem(21),
      },
    },
    h3: {
      fontWeight: 500,
      fontSize: theme.typography.pxToRem(16),
      [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.pxToRem(18),
      },
    },
    caption: {
      fontSize: theme.typography.pxToRem(11),
      lineHeight: '1.2',
    },
    body1: {
      fontSize: theme.typography.pxToRem(15),
      lineHeight: 'inherit',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          lineHeight: '1.75',
          color: theme.palette.common.black,
          backgroundColor: theme.palette.common.white,
          fontFamily: theme.typography.fontFamily,
        },
        dt: {
          lineHeight: '1.25',
          fontWeight: 500,
        },
        ul: {
          listStyleType: 'none',
          margin: 0,
          padding: 0,
        },
        img: {
          verticalAlign: 'middle',
          maxWidth: '100%',
          height: 'auto',
        },
        a: {
          textDecoration: 'none',
        },
        button: {
          appearance: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          padding: 0,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        disableelevation: 'true',
        disablefocusripple: 'true',
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 0,
          padding: '4px 20px',
        },
        outlinedPrimary: {
          '&:hover, &:focus': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableelevation: 'true',
        disablefocusripple: 'true',
        disableRipple: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        square: true,
      },
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          '&:hover, &:focus': {
            '.MuiCardActionArea-focusHighlight': {
              opacity: 0,
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: theme.typography.pxToRem(16),
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

export default theme;
