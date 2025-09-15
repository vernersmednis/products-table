import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from '@/components/ui/provider'
import Products from './screens/products/index.jsx'
import './App.css'

function App() {

  return (
    <Provider>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/products' />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
