import './App.css'
import axios from "axios"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import About from './About.jsx';
import { useState } from 'react';
import Topbar from './Topbar.jsx';
import Profile from './Profile.jsx';
import Contacts from './Contacts.jsx';
import LoginPage from './LoginPage.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import RegisterPage from './RegisterPage.jsx';

function App() {
  let [cart, setCart] = useState([])
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false) 
  const [toProfile, setToProfile] = useState(false)
  const [toPurchase, setToPurchase] = useState(false)
  const [searchResults, setSearchResults] = useState('')
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const addToCart = (product) => {
    setCart(prevCart => [...cart, product])
  }

  const handleDel =(product, productIndex) => {
    cart.splice(productIndex, 1)
    setCart([...cart])
  }

  const handleLogOut = (e) => {
    e.preventDefault()
    setLoggedIn(false)
  }
  
  const handleToProfile = () => {
    setToProfile(!toProfile)
  }

  const handleToPurchase = () => {
    setToPurchase(!toPurchase)
  }

  const handleSearch = (searchValue) => {
    setSelectedCategory(searchValue)
    setSearchResults('')
  }
  
  return (
    <Router>
      <Topbar 
        userName={userName}
        loggedIn={loggedIn}
        handleLogOut={handleLogOut}
        handleSearch={handleSearch}
        handleToProfile={handleToProfile}
      />
      <Routes>
        <Route 
          path='/' 
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
            email={email}
            password={password}
            loggedIn={loggedIn}
            setEmail={setEmail}
            setLoggedIn={setLoggedIn}
            setPassword={setPassword}
            />
          }
        />
        <Route 
          path='/registerPage' 
          element={
            <RegisterPage 
              email={email}
              password={password}
              setEmail={setEmail}
              userName={userName}
              setLoggedIn={setLoggedIn}
              setPassword={setPassword}
              setUserName={setUserName}
            />
          }
        />
        <Route 
          path='/profile' 
          element={
            <Profile
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
  )
}

export default App
