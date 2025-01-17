import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import DarkModeContextProvider from './context/dark-mode-context.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: '8px' }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 5000,
        },
        style: {
          fontSize: '16px',
          maxWidth: '500px',
          padding: '16px 24px',
        },
      }}
    />

    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </StrictMode>
);
