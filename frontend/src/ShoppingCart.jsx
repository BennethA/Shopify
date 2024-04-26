import './ShoppingCart.css'
import Footer from './Footer'
import Purchase from './Purchase'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaXmark } from 'react-icons/fa6'

function ShoppingCart(props) {

  let totalAmount = Math.round(props.cart.reduce((total, product) => total + product.price, 0))
  return (
    <>
      <div className="shoppingCart">
        <div className="shopLink">
          <Link to="/shop"><FaArrowLeft/></Link>
        </div>
        <div className="cart">
          Cart
        </div>
        <div className="addedProducts">
          {props.cart.map((product, productIndex) => {
            return (
              <div className="cartProducts" key={product}>
                <div className="cartProduct">
                  <div className="image">
                    <img src={product.image_url} alt="" />
                  </div>
                  <div className="cartProductDesc">
                    {product.name}
                    <div className='remove' onClick={() => props.handleDel(product, productIndex)}>
                      <FaXmark/>
                    </div>
                  </div>
                  <div className="cartProductPrice">
                    ${product.price}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="amtAndPurchase">
          <div>Total: <b>${totalAmount}</b></div>
          <button className="purchase" onClick={props.handleToPurchase}>
            Purchase
          </button>
        </div>
      </div>
      {
        props.toPurchase && <Purchase handleToPurchase={props.handleToPurchase}/>
      }
      <Footer/>
    </>
  )
}

export default ShoppingCart