import { FaXmark } from "react-icons/fa6"

const Purchase = (props) => {
  return (
    <div className="purchaseProducts">
      Purchase 
      <FaXmark onClick={props.handleToPurchase}/>
    </div>
  )
}

export default Purchase