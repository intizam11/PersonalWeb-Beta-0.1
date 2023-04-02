import { Routes, Route } from 'react-router-dom'
import DetailProject from './pages/DetailProject'
import Home from './pages/Home'


export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='detail' element={<DetailProject />} />
      </Routes>

    </>
  )
}