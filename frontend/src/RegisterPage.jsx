import Footer from "./Footer"
import { Link, useNavigate } from "react-router-dom"

const RegisterPage = ({email, userName, password, setLoggedIn, setUserName, setEmail, setPassword}) => {
  const navigate = useNavigate()
  
  const registerNewAccoount = (e) => {
    e.preventDefault()
    axios.post('mongodb compass url/register', {email, userName, password})
    .then(result => {console.log(result)
      navigate('/home')
      setLoggedIn(true)
    })
    .catch(err => console.log('error on line 33'))
  }

  return (
    <>
      <div className="formBox">
        <h2>Register</h2>
        <form onSubmit={registerNewAccoount}>
          <label htmlFor="userName">
            Username
            <input 
              require
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              require
              type="email" 
              placeholder="example123@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            Password
            <input 
              require
              type="password" 
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Sign In</button>
          <Link to="/loginPage" className="toLogin">Already have an account</Link>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default RegisterPage