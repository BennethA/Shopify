import {
  Link,
  useLocation 
} from 'react-router-dom';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6'
import userProfile from './images/user.png';

function Topbar (props) {
  const location = useLocation()
  const userImg = userProfile;
  const [searchQuery, setSearchQuery] = useState('')

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query)
  }
  
  const handleInputClick = () => {
    props.handleSearch(searchQuery)
    setSearchQuery('')
  }
  
  return (
    <header className="main">
      <div className="main1">
        <div className="name">
          <Link to='/'>
            SHOPILY
          </Link>
        </div>
        {
          location.pathname === '/shop' &&
          <div className="inputSection">
            <input 
            type="search" 
            value={searchQuery} 
            className="inputName" 
            placeholder='Search for product type'
            onChange={handleInputChange}/>
            <button className="searchBtn" onClick={handleInputClick}>
              <FaSearch/>
            </button>
          </div>
        }
        {
          location.pathname !== '/shop' &&
          <div className='toShop'><Link to="/shop">Shop</Link></div>
        }
        <div className="cartDisplay">
          {
            props.loggedIn 
            ? <Link to='/shoppingCart'>
                <div>Cart<FaCartShopping/></div>
                {props.cart.length}
              </Link>
            : ''
          }
        </div>
      </div>
      <button className="user">
        {
          props.loggedIn 
          ? <img src={userImg} alt="" /> 
          : <Link to="/loginPage">Log In</Link>
        }
      </button>
    </header>
  )
}

export default Topbar