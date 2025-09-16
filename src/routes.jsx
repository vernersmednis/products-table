import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Products from './screens/products/index.jsx'
import './App.css'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/products' />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

