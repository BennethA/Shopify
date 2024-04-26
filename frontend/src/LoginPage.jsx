import Footer from "./Footer"
import { Link, useNavigate } from "react-router-dom"

const LoginPage = ({email, userName, password, setLoggedIn, setEmail, setPassword}) => {
  const navigate = useNavigate()

  const handleLogIn = (e) => {
    e.preventDefault()
    axios.post('mongodb compass url/login', {email, userName, password})
    .then(result => {
      console.log(result)
      if(result.data === 'success') {
        navigate('/home')
      }
      setLoggedIn(true)
    })
    .catch(err => console.log('error on line 33'))
  }
  
  return (
    <>
      <div className="formBox"> 
        <h2>Login</h2>
        <form onSubmit={handleLogIn}>
          <label htmlFor="email">
            Email
            <input 
              required
              type="email" 
              name="email"
              placeholder="example123@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            Password
            <input 
              required
              type="password" 
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">
            Login
          </button>      
          <Link to="/registerPage" className="toRegister">Don't have an account</Link>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default LoginPage