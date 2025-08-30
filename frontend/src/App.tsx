import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Deals from './pages/Deals'
import DealDetail from './pages/DealDetail'

export default function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Dashboard</Link> | 
        <Link to='/deals'>Deals</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/deals' element={<Deals />} />
        <Route path='/deals/:id' element={<DealDetail />} />
      </Routes>
    </div>
  )
}
