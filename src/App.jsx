import './App.css'
import Home from './components/Home'
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Single from './components/Single'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Chackout from './components/Chackout'
import NotFound from './components/NotFound'
import User from './components/user'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single" element={<Single />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Chackout />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
