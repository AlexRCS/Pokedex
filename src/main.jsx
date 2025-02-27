import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRoutes from './pages/routes.jsx';
import { ThemeProvider } from './contexts/themeContext.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <StrictMode>
      <AppRoutes />
    </StrictMode>
  </ThemeProvider>
);