import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css'
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import About from './About.jsx';
import Topbar from './Topbar.jsx';
import LoginPage from './LoginPage.jsx';
import ShoppingCart from './ShoppingCart.jsx'
import RegisterPage from './RegisterPage.jsx';
import { useState } from 'react';
import Contacts from './Contacts.jsx';
import ProfileInfo from './ProfileInfo.jsx';

function App() {
  let [cart, setCart] = useState([])
  const [loggedIn, setLoggedIn] = useState(false) 
  const [toProfile, setToProfile] = useState(false)
  const [toPurchase, setToPurchase] = useState(false)
  const [searchResults, setSearchResults] = useState('')
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const handleDel =(product, productIndex) => {
    cart.splice(productIndex, 1)
    setCart([...cart])
  }

  const handleLogIn = (e) => {
    e.preventDefault()
    setLoggedIn(!loggedIn)
  }
  
  const handleToProfile = () => {
    setToProfile(!toProfile)
  }

  const handleToPurchase = () => {
    setToPurchase(!toPurchase)
  }

  const handleSearch = (searchValue) => {
    setSearchResults(searchValue)
    setSelectedCategory(searchValue)
    setSearchResults('')
  }
  
  return (
    <>
    <Router>
      <Topbar 
        loggedIn={loggedIn}
        handleLogIn={handleLogIn}
        handleSearch={handleSearch}
        handleToProfile={handleToProfile}
      />
      <Routes>
        <Route 
          path='/home' 
          element={
            <Home/>
          }
        />
        <Route 
          path='/shop' 
          element={
            <Shop 
              cart={cart}
              loggedIn={loggedIn}
              addToCart={addToCart}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          }
        />
        <Route 
          path='/shoppingCart' 
          element={
            <ShoppingCart 
              cart={cart}
              handleDel={handleDel} 
              toPurchase={toPurchase} 
              handleToPurchase={handleToPurchase} 
            />
          }
        />
        <Route 
          path='/loginPage' 
          element={
            <LoginPage 
            loggedIn={loggedIn}
            handleLogIn={handleLogIn}/>
          }
        />
        <Route 
          path='/registerPage' 
          element={
            <RegisterPage />
          }
        />
        <Route 
          path='/shoppingCart' 
          element={
            <ShoppingCart 
              cart={cart}
              handleDel={handleDel} 
              toPurchase={toPurchase} 
              handleToPurchase={handleToPurchase} 
            />
          }
        />
        <Route 
          path='/profileInfo' 
          element={
            <ProfileInfo
            />
          }
        />
        <Route 
          path='/about' 
          element={
            <About
            />
          }
        />
        <Route 
          path='/contacts' 
          element={
            <Contacts/>
          }
        />
        <Route 
          path='*' 
          element={
            <Home/>
          }
        />
      </Routes>
    </Router>
    </>
  )
}

export default App
