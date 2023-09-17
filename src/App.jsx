import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
