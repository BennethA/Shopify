import {
  Link,
  useLocation 
} from 'react-router-dom';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
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
    <header>
      <Link to='/' className="name">
        SHOPILY
      </Link>
      <div>
      {
        location.pathname === '/shop' &&
        <div className="inputSection">
          <input 
          type="search" 
          value={searchQuery}
          placeholder='Search for product type'
          onChange={handleInputChange}/>
          <button className="searchBtn" onClick={handleInputClick}>
            <FaSearch/>
          </button>
        </div>
      }
      </div>
      <button className="user">
        {
          props.loggedIn 
          ? <details>
              <summary>
                <img src={userImg} alt=""/> 
              </summary>
              <ul>
                  <Link to="/profileInfo" className='toProfile'>Profile</Link>
                <li onClick={props.handleLogIn}>Log Out</li>
              </ul>
            </details>
          : <Link to="/loginPage" className='toLogin'>Log In</Link>
        }
      </button>
    </header>
  )
}

export default Topbar