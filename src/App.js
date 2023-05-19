import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './style/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
                <Route path='/' element={<Dashboard />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
