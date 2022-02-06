import { useState } from 'react'
import '../src/index.css'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Cart, Login, Shop } from './pages'
import ProtectedRoutes from './components/ProtectedRoutes'

Navigate

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route element={<ProtectedRoutes/>}>
              <Route path="/shop" element={<Shop/>} />
              {/* <Route path="/shop/:id" element={<Shop/>} /> */}
              <Route path="/cart" element={<Cart/>} />
            </Route>
          </Routes>
        </HashRouter>
    </div>
  )
}

export default App
