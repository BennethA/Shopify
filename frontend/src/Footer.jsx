import { Link } from 'react-router-dom'
import { AiOutlineInfoCircle, AiOutlineMail} from "react-icons/ai"
import { FaFacebook, FaGoogle, FaMap, FaStore, FaTwitter, FaWhatsapp } from "react-icons/fa6"

function Footer () {
  return (
    <footer>
      <div className="reachUs">
        <div className="reachUsOne">
          <Link to="/shop"><FaStore/>Shop</Link>
          <Link to="/about"><AiOutlineInfoCircle/>About</Link> 
          <Link to="/contacts"><AiOutlineMail/>Contacts</Link>
        </div>
        <div className="reachUsTwo">
          <a href="http://www.facebook.com/shopily"><FaFacebook className="icon"/> Facebook</a>
          <a href="http://wa.me/0508529031"><FaWhatsapp/> Whatsapp</a> 
          <a href="http://www.twitter.com/shopily"><FaTwitter/> Twitter(X)</a>
          <a href="mailto:addobenneth6@gmail.com"><FaGoogle/> Gmail</a>
        </div>
        <div className="reachUsThree">
          <FaMap/>Location: Accra, Ghana, West Africa
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127056.97423159608!2d-0.17694719999997358!3d5.636096000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1713753274853!5m2!1sen!2sgh" width="400" height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
    </footer>
  )
}

export default Footer;