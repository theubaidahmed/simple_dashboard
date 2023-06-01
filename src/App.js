import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './style/theme';
import Header from './components/Header';
import AuthorizationProvider from './hooks/Authorize';

function App() {
    return (
        <>
            <AuthorizationProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Header>
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                        </Routes>
                    </Header>
                </ThemeProvider>
            </AuthorizationProvider>
        </>
    );
}

export default App;
