import {
  Link,
  useLocation 
} from 'react-router-dom';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function Topbar (props) {
  const location = useLocation()
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
            <div>
              <input 
              type="search" 
              value={searchQuery}
              placeholder='Search for product type'
              onChange={handleInputChange}/>
            </div>
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
                {props.userName}'s Account
              </summary>
              <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li onClick={props.handleLogOut}>
                  <Link to="/home">
                    Log Out
                  </Link>
                </li>
              </ul>
            </details>
          : <div className='toLogin'>
              <Link to="/loginPage">Log In</Link>
          </div>
        }
      </button>
    </header>
  )
}

export default Topbar