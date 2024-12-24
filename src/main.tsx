import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.tsx';
import Tab2 from './components/Tab2/Tab2.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/tab-2" element={<Tab2 />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
