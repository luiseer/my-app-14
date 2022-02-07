import '../src/index.css'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Cart, Login, Shop } from './pages'
import ProtectedRoutes from './components/ProtectedRoutes'
import Products from './pages/Products'
import { useSelector } from 'react-redux'
import { LoadingScreen } from './components'




function App() {

  const isLoading = useSelector(state => state.isLoading)


  return (
    <div className="App">
      <HashRouter>

        {
          isLoading && <LoadingScreen/>
        }

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
