import Footer from './Footer';
import Products from './Products'
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6'

const Shop = (props) => {
  return (
    <>
      <div className='shop'>
        <div className="cartDisplay">
          <Link to='/shoppingCart'>
            <div>Cart</div>
            <div><FaCartShopping/> {props.cart.length}</div>
          </Link>
        </div>
        <Products 
          loggedIn={props.loggedIn}
          addToCart={props.addToCart} 
          selectedCategory={props.selectedCategory} 
          setSelectedCategory={props.setSelectedCategory} 
        />
      </div>
      <Footer/>
    </>
  )
}

export default Shop