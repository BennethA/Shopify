import { FaFacebook, FaGoogle, FaHouse, FaMap, FaTwitter, FaWhatsapp } from "react-icons/fa6"
import { AiOutlineInfoCircle, AiOutlineMail} from "react-icons/ai"
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <>
      <div className="reachUs">
        <div className="reachUsOne">
          <div>
            <FaHouse/>
            <Link to="/home">Home</Link>
          </div>
          <div>
            <AiOutlineInfoCircle/>
            <Link to="/about">About</Link>
          </div>
          <div>
            <AiOutlineMail/>
            <Link to="/contacts">Contacts</Link>
          </div>
        </div>
        <div className="reachUsTwo">
          <div>
            <FaFacebook/>
            <a href="http://www.facebook.com/shopily"> Facebook</a>
          </div>
          <div>
            <FaWhatsapp/>
            <a href="http://wa.me/0508529031"> Whatsapp</a> 
          </div>
          <div>
            <FaTwitter/>
            <a href="http://www.twitter.com/shopily"> Twitter(X)</a>
          </div>
          <div>
            <FaGoogle/>
            <a href="mailto:addobenneth6@gmail.com"> Gmail</a>
          </div>
        </div>
        <div className="reachUsThree">
          <div>
            <FaMap/>
            <a href="http://www.google.com/maps?q=Accra"> Location: Accra, Ghana, West Africa</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;