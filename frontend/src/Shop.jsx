import Footer from './Footer'
import Products from './Products'

const Shop = (props) => {
  return (
    <>
      <div className='shop'>
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