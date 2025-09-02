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
import { createContext, useState, useContext } from 'react'
export const MyContext = createContext();

function App() {

  const [cartCountAll, setCartCountAll] = useState();

  const cartReadAll = async () => {
    let res = await fetch('https://pizza-fest-61924-default-rtdb.firebaseio.com/carts.json');
    let data = await res.json();

    if (data) {
      let data2 = await Object.values(data);
      setCartCountAll(data2);
    } else {
      setCartCountAll([]);
    }
  }


  return (
    <>

      <MyContext.Provider value={{ cartCountAll, setCartCountAll, cartReadAll }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/single/:id" element={<Single />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Chackout />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider >

    </>
  )
}

export default App
