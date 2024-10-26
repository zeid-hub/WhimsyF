import Login from './Components/LOGIN/Auth'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/BUYER/Navbar'
import Home from './Components/BUYER/LandingPage/Home'
import Shop from './Components/BUYER/MyShop'
import About from './Components/BUYER/About'
import Contact from './Components/BUYER/Contact'
import Cart from './Components/BUYER/Cart'
import Checkout from './Components/BUYER/Checkout'
import Seller from './Components/SELLER/Seller'
// import SellerProducts from './Components/SELLER/SellerProducts'
import SellOrders from './Components/SELLER/SellerOrders'
import Settings from './Components/SELLER/SellerSettings'
import DashProducts from './Components/SELLER/DashProducts'

function App() {

  return (
    <div className='div-app'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shopping-cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/sellerdash' element={<Seller/>} />
      <Route path='/my-products' element={<DashProducts/>} />
      <Route path='/my-orders' element={<SellOrders/>} />
      <Route path='/my-settings' element={<Settings/>} />
    </Routes>
    </div>
  )
}

export default App
