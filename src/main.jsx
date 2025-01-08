import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AnimeContextProvider from './context/anime-context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimeContextProvider>
      <App />
    </AnimeContextProvider>
  </StrictMode>
);
