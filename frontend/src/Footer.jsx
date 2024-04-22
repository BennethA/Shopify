import { FaFacebook, FaGoogle, FaHouse, FaMap, FaTwitter, FaWhatsapp } from "react-icons/fa6"
import { AiOutlineInfoCircle, AiOutlineMail} from "react-icons/ai"
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <footer>
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
            <FaMap/>Location: Accra, Ghana, West Africa
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127056.97423159608!2d-0.17694719999997358!3d5.636096000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1713753274853!5m2!1sen!2sgh" width="400" height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
    </footer>
  )
}

export default Footer;