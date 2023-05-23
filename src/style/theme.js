import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#353A55',
        },
        secondary: {
            main: '#738CF2',
        },
        tertiary: {
            main: '#FD9898',
        },
        background: {
            default: '#EBEEF4',
        },
    },
    typography: {
        fontFamily: "'Dosis', sans-serif",
    },
    components: {
        MuiCard: {
            variants: [
                {
                    props: { variant: 'stats' },
                    style: {
                        padding: '16px',
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '220px',
                    },
                },
                {
                    props: { color: 'primary' },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                    }),
                },
                {
                    props: { color: 'secondary' },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.secondary.main,
                        color: 'white',
                    }),
                },
                {
                    props: { color: 'tertiary' },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.tertiary.main,
                        color: 'white',
                    }),
                },
            ],
        },
    },
});

export default theme;
