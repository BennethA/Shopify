import Footer from './Footer'
import { Link } from 'react-router-dom'

function Home(props) { 

  return (
    <>
      <div>
        <div className="home">
          <div className="homeFirst">
            <div className="welcomeMsg">
              <div className="openMsg">
                DISCOVER IT ALL CLOTHING TO JEWELRY AND MORE ON<span className='shopily'>SHOPILY</span>
              </div>
              <div className="description">
                Shopily is like having your favorite store in your pocket and on the internet just like Amazon. <br /> It brings the world of online shopping right to your fingertips, making it easier than ever to find and purchase the things you love.
              </div>
              <button className="shopNowBtn">
                <Link to="/shop" onClick={props.handleInShop}>SHOP NOW</Link>
              </button>
            </div>
          </div>
          <div className="help">
            <div className="helpText">
              <p>Free Shipping</p> <span>Free Shipping on all order</span>
            </div>
            <div className="helpText">
              <p>Customer Support 24/7</p> <span>Instant access to support</span>
            </div>
            <div className="helpText">
              <p>100% Secure Payment</p> <span>We ensure your money is save</span>
            </div>
            <div className="helpText">
              <p>Money Back Guarantee</p> <span>30 Days Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home
