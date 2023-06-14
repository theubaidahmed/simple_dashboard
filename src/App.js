import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './style/theme';
import Header from './components/Header';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                </Routes>
            </Header>
        </ThemeProvider>
    );
}

export default App;
