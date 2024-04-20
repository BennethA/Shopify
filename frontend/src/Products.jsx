import { Link } from 'react-router-dom'
import PRODUCTS from './Products.json'
import { FaCartPlus } from 'react-icons/fa6'

function Products (props) {
  const categories = ["All", "Shirts", "Dresses", "Jeans", "Footwear", "Outerwear", "Swimwear", "Shorts", "Hats", "Socks", "Hoodies", "Pants", "Skirts", "Accessories", "Pajamas", "Sweaters", "Suits", "Perfume" ]

  const filteredProducts = props.selectedCategory === 'All' ? PRODUCTS : PRODUCTS.filter(product => product.category == props.selectedCategory)
  return (
    <>
    <div className="productsSection">
      <div className="topic">
        <h4>OUR PRODUCTS</h4>
        <div className="underlineMain">
          <hr className="underline"></hr>
        </div>
      </div>
      <div className="productsNav">
        {
          categories.map(category => {
            return (
              <button key={category}
                className={`category ${props.selectedCategory === category ? "active" : "notActive"}`}
                onClick={() =>props.setSelectedCategory(category)}>{category}
              </button>
            )

          })
        }
      </div>
      <div className="products"> 
      {
        filteredProducts.length === 0 
        ? <div className='noItems'>
            <b>No Product</b>
            <div>
              <small>
                note: Make sure the words in the search bar is correct
              </small>
            </div>
          </div> 
        : filteredProducts.map((product) => {
            return (
                <div className="productDesc" key={product.id}>
                  <div className="productImage">
                    <img src={product.image_url} alt="" loading='lazy'/>
                  </div>
                  <h3>
                    {product.name}
                  </h3>
                  <p className='productDescription'>
                    {product.description}
                  </p>
                  <p className='productPrice'>
                    ${product.price}
                  </p>
                  {
                    props.loggedIn 
                    ? <div onClick={() => props.addToCart(product) }>
                        <button className="addToCart">
                          Add To Cart
                          <FaCartPlus/>
                        </button>
                      </div>
                    : <Link to="/loginPage">
                        <button className="addToCart">
                          Add To Cart
                          <FaCartPlus/>
                        </button>
                      </Link>
                  }
                </div> 
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export defaul