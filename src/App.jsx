import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Cart, Login, Product, Shop } from './pages'
import ProtectedRoutes from './components/ProtectedRoutes'

Navigate

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes/>}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/product" element={<Product />} />
              <Route path="/shop" element={<Shop />} />
            </Route>
          </Routes>
        </HashRouter>
    </div>
  )
}

export default App
