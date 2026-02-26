import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header  from './components/Header.jsx';
import Footer  from './components/Footer.jsx';
import HomePage   from './pages/HomePage.jsx';
import AboutPage  from './pages/AboutPage.jsx';
import BoardPage  from './pages/BoardPage.jsx';
import EventsPage from './pages/EventsPage.jsx';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('cc-theme') : null;
    if (saved === 'light' || saved === 'dark') setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cc-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="app">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/"       element={<HomePage />}   />
        <Route path="/about"  element={<AboutPage />}  />
        <Route path="/board"  element={<BoardPage />}  />
        <Route path="/events" element={<EventsPage />} />
        <Route path="*"       element={<HomePage />}   />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
